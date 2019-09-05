import {R,H} from '../common'

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
  constructor (axioms) {
    this.#axioms = axioms
  }

  /* Varaibles */
  #vars = []

  vars = () => this.#vars

  addVar = () => {
    const x = _var()
    x.id = this.#vars.length
    return H.pushAndReturn (x) (this.#vars)
  }

  /* Axioms */
  #axioms = {}

  axioms = () => this.#axioms

  useAxiom = name => (...args) => this.#addPr
    (args)
    (H.uncurry (this.#axioms[name]) (args))

  /* Predicates */
  #predicates = {}

  predicates = args => this.#predicates[args |> H.serialize]

  #addPr = args => pr => H.pushOrCreateAndReturn (args |> H.serialize) (pr) (this.#predicates)

  /**
   * @description Modus Ponens
   * @example MP (x >> y, x) === y
   * @nonPure
   */
  MP = (imp, pr1) => {
    /* This following logic is not so intuitive */
    /* But that's because _implies actually compiles down to _Nand */
    if (R.equals (imp.x) (pr1) && R.equals (imp.y.x) (pr1)) {
      return this.#addPr ([]) (imp.y.y)
    } else {
      throw new Error(`MP not used correctly: ${imp}, ${pr1}`)
    }
  }

  /* Proposition */
  #proposition 

  proposition = () => this.#proposition

  QED = () => this.#proposition = R.last (this.predicates ([]))
}

export const _state = axioms => new _State(axioms)