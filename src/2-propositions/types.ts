import {R} from 'common'
import * as B from 'basic'

type P = B._Proposition

export class _Nand extends B._Proposition {
  constructor (public x: P, public y: P) {
    super ()
  }
}

export const nand = R.construct (_Nand)
bi (`^`, nand)

export const not = x => x ^ x
un (`!`, not)

export const implies = x => y => x ^ (x ^ y)
bi (`>>`, implies)

export const and = x => y => (x ^ y) ^ (x ^ y)
bi (`&`, and)

export const or = x => y => !((!x) & (!y))

export const equiv = x => y => (x >> y) & (y >> x)