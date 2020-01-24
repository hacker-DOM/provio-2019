import * as R from 'ramda'
import {Proposition} from './proposition'

export class Nand {
  constructor (public left, public right) {}
}

export const nand = R.construct (Nand)
