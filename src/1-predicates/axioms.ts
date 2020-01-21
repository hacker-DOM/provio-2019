import {R} from 'common'
import {Proposition} from './proposition'
import {Nand, implies, not} from './connectives'

bi (`>>`, implies)
un (`!`, not)

export const H1 = (x, y) => (
  x >> (y >> x)
)

export const H2 = (x, y, z) => (
  x >> (y >> z)) >> ((x >> y) >> (x >> z)
)

export const H3 = (x, y) => (
  (!y >> !x) >> (x >> y)
)

export const MP = ({implication: i, proposition: p}) => {
  /* This following logic is not so intuitive */
  /* But that's because _implies is actually a complex _Nand */
  const x = new Proposition ()
  if (R.equals ((i (x)).x) (p (x)) && R.equals ((i (x)).y.x) (p (x))) {
    return (x: P) => i (x).y.y
  }

  throw new Error (`MP not used correctly: ${i}, ${p}`)
}