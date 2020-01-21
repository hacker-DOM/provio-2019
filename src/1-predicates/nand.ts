import {R} from 'common'
import {Proposition} from './proposition'

export class Nand extends Proposition {
  constructor (public left, public right) {
    super ()
  }
}

export const nand = R.construct (Nand)
