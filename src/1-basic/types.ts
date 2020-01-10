/* eslint-disable max-lines */
import {R, H} from 'common'

export class _Proposition {}

export const proposition = R.construct (_Proposition)

/* Variable */
// export class _Var {}

// export const _var = R.construct (_Var)

type _Proof = () => (x: _Proposition) => _Proposition

export class _Theorem {
  constructor (
    public name: string,
    public WTS: (x: _Proposition) => _Proposition,
    public proof: _Proof,
  ) {}
}

export const theorem = R.construct (_Theorem)

// export class _State {
//   constructor (public axioms: _Proposition[]) {}

//   /* Variables */
//   vars = []

// addVar = () => {
//   const x = _var ()
//   x.id = this.vars.length
//   return H.pushAndReturn (x) (this.vars)
// }

// /* Axioms */
// axioms = {}

// useAxiom = name => (...args) => this.addPr
// (args)
// (H.uncurry (this.axioms[name]) (args))

// /* Predicates */
// predicatesProp = {};

// predicates = args => this.predicatesProp[args |> H.serialize]

// addPr = args => pr => H.pushOrCreateAndReturn (args |> H.serialize) (pr) (this.predicatesProp)

// /**
//  * @description Modus Ponens
//  * @example MP (x >> y, x) === y
//  * @nonPure
//  */
// MP = (imp, pr1) => {
//   /* This following logic is not so intuitive */
//   /* But that's because _implies actually compiles down to _Nand */
//   if (R.equals (imp.x) (pr1) && R.equals (imp.y.x) (pr1)) {
//     return this.addPr ([]) (imp.y.y)
//   }

//   throw new Error (`MP not used correctly: ${imp}, ${pr1}`)

// }

// /* Proposition */
// proposition

// QED = () => this.proposition = R.last (this.predicates ([]))
// }

// export const _state = axioms => new _State (axioms)