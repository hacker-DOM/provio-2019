import * as R from 'ramda'

export class Nand {
  constructor (left, right) {
    this.left = left
    this.right = right
  }
}

export const nand = R.construct (Nand)
