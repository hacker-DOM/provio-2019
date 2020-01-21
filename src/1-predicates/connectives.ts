import {Proposition as P} from './proposition'

export class Nand extends P {
  constructor (public x: P, public y: P) {
    super ()
  }
}

export const nand = R.construct (Nand)
bi (`^`, nand)

export const not = x => x ^ x
un (`!`, not)

export const implies = x => y => x ^ (x ^ y)
bi (`>>`, implies)

export const and = x => y => (x ^ y) ^ (x ^ y)
bi (`&`, and)

export const or = x => y => !((!x) & (!y))

export const equiv = x => y => (x >> y) & (y >> x)