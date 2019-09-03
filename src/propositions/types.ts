import * as B from '../basic/types'
import * as A from './axioms'

export class _Nand {
  constructor(x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _nand = x => y => new _Nand(x, y)

// export class _Not {
//   constructor(x: _Set): void {
//     this.x = x
//   }
// }

// export const _not = x => new _Not(x)
export const _not = x => _nand (x) (x)

// export class _Implies {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
// }

// export const _implies = x => y => new _Implies(x, y)
export const _implies = x => y => _nand (x) (_nand (x) (y))

export const _and = x => y => _nand (_nand (x) (y)) (_nand (x) (y))

export const _or = x => y => _not (_and (_not (x)) (_not (y)))

// export class _Equiv {
//   constructor(x: _Set, y: _Set): void {
//     this.x = x
//     this.y = y
//   }
// }

export const _equiv = x => y => _and (_implies (x) (y), _implies (y) (x))