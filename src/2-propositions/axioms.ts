import {R} from 'common'
import * as T from './types'
import * as B from 'basic'

type P = B._Proposition;

bi (`>>`, T.implies)
un (`!`, T.not)

// H1
export const H1 = (x: P, y: P) => (
  x >> (y >> x)
)

// H2
export const H2 = (x: P, y: P, z: P) => (
  x >> (y >> z)) >> ((x >> y) >> (x >> z)
)

// H3
export const H3 = (x: P, y: P) => (
  (!y >> !x) >> (x >> y)
)

interface IModusPonens {
  implication: T._Nand;
  proposition: B._Proposition;
}

export const MP = ({implication: i, proposition: p}: IModusPonens) => {
  /* This following logic is not so intuitive */
  /* But that's because _implies is actually a complex _Nand */
  const x = B.proposition ()
  if (R.equals ((i (x)).x) (p (x)) && R.equals ((i (x)).y.x) (p (x))) {
    return (x: P) => i (x).y.y
  }

  throw new Error (`MP not used correctly: ${i}, ${p}`)
}