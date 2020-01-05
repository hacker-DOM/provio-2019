import * as B from 'basic/types'
import * as A from './axioms'

export class _Nand {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _nand = x => y => new _Nand (x, y)
bi (`^`, _nand)

export const _not = x => x ^ x
un (`!`, _not)

export const _implies = x => y => x ^ (x ^ y)
bi (`>>`, _implies)

export const _and = x => y => (x ^ y) ^ (x ^ y)
bi (`&`, _and)

export const _or = x => y => !((!x) & (!y))

export const _equiv = x => y => (x >> y) & (y >> x)