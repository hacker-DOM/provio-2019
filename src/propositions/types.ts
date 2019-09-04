import * as B from '../basic/types'
import * as A from './axioms'

export class _Nand {
  constructor(x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _nand = x => y => new _Nand(x, y)

export const _not = x => _nand (x) (x)

export const _implies = x => y => _nand (x) (_nand (x) (y))

// export class _Implies {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
// }
// export const _implies = x => y => new _Implies(x, y)

// export const _and = x => y => _nand (_nand (x) (y)) (_nand (x) (y))
export class _And {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}
export const _and = x => y => new _And(x, y)

export const _or = x => y => _not (_and (_not (x)) (_not (y)))

export const _equiv = x => y => _and (_implies (x) (y), _implies (y) (x))

export class _State extends B._State {
  constructor (axioms, inferences) {
    super (axioms, inferences)
  }
}

export const _state = axioms => inferences => new _State (axioms, inferences)

// export const enhanceState = state => {
//   state.addAxiom(H1)
//   state.addAxiom(H2)
//   state.addAxiom(H3)
//   state.addInference(MP)
//   return state
// }

// export const _state = () => enhanceState (B._state())