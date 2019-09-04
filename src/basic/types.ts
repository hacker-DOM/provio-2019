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
    R.append (x) (this.#vars)
    return x
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

  useAxiom = name => (...args) => this.#addGeneral (this.#axioms[name] (...args))
  
  /* Inferences */
  #inferences = {}

  inferences = () => this.#inferences

  useInference = name => (...args) => this.#addGeneral (this.#inferences[name] (...args))

  /* Proposition */
  #proposition 

  proposition = () => this.#proposition

  setProposition = pr => {
    this.#generals.includes (pr) ? this.#proposition = pr : null
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
