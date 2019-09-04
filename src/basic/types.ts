import * as BH from './helpers'
import {R,H,util} from '../common'

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
    return H.pushAndReturn (x) (this.#vars)
  }

  /* Predicates */
  #predicates = {}

  predicates = args => this.#predicates[args |> BH.serialize]

  #addPr = args => pr => H.pushOrCreateAndReturn (args |> BH.serialize) (pr) (this.#predicates)

  /* Generals */
  #generals = []

  generals = () => this.#generals

  #addGeneral = pr => H.pushAndReturn (pr) (this.#generals)

  /* Axioms */
  #axioms = {}

  axioms = () => this.#axioms

  useAxiom = name => (...args) => this.#addGeneral 
    (H.uncurry (this.#axioms[name]) (args))

  /* Inferences */
  #inferences = {}

  inferences = () => this.#inferences

  useInference = name => (...args) => this.#addGeneral
      (H.uncurry (this.#inferences[name]) (args))

  /* Modus Ponens */
  MP = (pr1_implies_pr2, pr1) => {
    if (R.equals (pr1_implies_pr2.x) (pr1) && R.equals (pr1_implies_pr2.y.x) (pr1)) {
      return this.#addGeneral (pr1_implies_pr2.y.y)
    } else {
      throw new Error(`MP not used correctly: ${pr1_implies_pr2}, ${pr1}`)
    }
  }

  /* Proposition */
  #proposition 

  proposition = () => this.#proposition

  QED = () => this.#proposition = R.last (this.#generals)
}

export const _state = axioms => inferences => new _State(axioms, inferences)