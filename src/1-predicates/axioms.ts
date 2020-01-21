import {R, H} from 'common'
import {Proposition} from './proposition'
import {implies, not} from './helpers'

bi (`>>`, implies)
un (`!`, not)

export const

H1 = (x, y) => (
  x >> (y >> x)
),

H2 = (x, y, z) => (
  x >> (y >> z)) >> ((x >> y) >> (x >> z)
),

H3 = (x, y) => (
  (!y >> !x) >> (x >> y)
),

MP = ({implication: i, proposition: p}) => {
  /* This following logic is not so intuitive */
  /* But that's because `implies` is actually a complex `Nand` */
  // const x = new Proposition ()
  const xs = R.repeat (new Proposition (), i.length)
  const x = xs[0]

  if (H.notEquals ((i (...xs)).left) (p (x))) {
    throw new Error (`MP not used correctly 1: ${i}, ${p}`)
  }

  if (H.notEquals ((i (...xs)).right.left) (p (x))) {
    throw new Error (`MP not used correctly 2: ${i}, ${p}`)
  }

  return (...ys) => i (...ys).right.right
}