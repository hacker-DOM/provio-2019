import * as BH from './helpers'
import {R,S,util} from '../common'

// Variable
export class _Var {
}

export const _var = () => new _Var()

export class _Theorem {
  constructor (name, proposition, proof) {
    this.name = name
    this.proposition = proposition
    this.proof = proof
  }
}

export const _theorem = name => proposition => proof => new _Theorem(name, proposition, proof)

export class _State {
  constructor (axioms, inferences) {
    this.#axioms = axioms
    this.#inferences = inferences
  }

  /* Varaibles */
  #vars = []

  vars = () => this.#vars

  addVar = () => {
    const x = _var()
    x.id = this.#vars.length
    return S.pushAndReturn (x) (this.#vars)
  }

  /* Predicates */
  #predicates = {}

  predicates = args => this.#predicates[args |> BH.serialize]

  #addPr = args => pr => S.pushOrCreateAndReturn (args |> BH.serialize) (pr) (this.#predicates)

  /* Generals */
  #generals = []

  generals = () => this.#generals

  #addGeneral = pr => S.pushAndReturn (pr) (this.#generals)

  /* Axioms */
  #axioms = {}

  axioms = () => this.#axioms

  useAxiom = name => (...args) => this.#addGeneral 
    (S.uncurry (this.#axioms[name]) (args))

  /* Inferences */
  #inferences = {}

  inferences = () => this.#inferences

  useInference = name => (...args) => this.#addGeneral
      (S.uncurry (this.#inferences[name]) (args))

  /* Modus Ponens */
  MP = (pr1_implies_pr2, pr1) => {
    // const a = JSON.stringify (pr1_implies_pr2.x) === JSON.stringify (pr1)
    // const b = R.equals (pr1_implies_pr2.x) (pr1)
    if (R.equals (pr1_implies_pr2.x) (pr1) && R.equals (pr1_implies_pr2.y.x) (pr1)) {
      return this.#addGeneral (pr1_implies_pr2.y.y)
    } else {
      `problem` |> console.log
    }
  }

  /* Proposition */
  #proposition 

  proposition = () => this.#proposition

  setProposition = pr => {
    R.includes (pr) (this.#generals) ? this.#proposition = pr : null
  }
}

export const _state = axioms => inferences => new _State(axioms, inferences)


    // const s = BH.serialize(args)
    // const prs = this.#predicates
    // s in prs ? prs[s].push(pr) : prs[s] = [pr]

  // logPredicates(args) {
  //   return R.map (R.toString) (this.predicates (args))
  // }

  // toString() {
  //   const vars= `${util.inspect(this.#vars)}`
  //   const prs = R.map (R.map (R.toString)) (this.#predicates)
  //   return vars + util.inspect(prs)
  // }

  // log() {
  //   console.log(this.toString())
  // }
