import {R} from 'common'
import * as B from 'basic'

const {_Proposition} = B

export class _Nand extends _Proposition {
  constructor (public x: _Proposition, public y: _Proposition) {
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