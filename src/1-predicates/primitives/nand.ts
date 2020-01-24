import * as R from 'ramda'

export class Nand {
  /* eslint-disable-next-line */
  constructor (public left, public right) {}
}

export const nand = R.construct (Nand)
