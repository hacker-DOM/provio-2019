import {R, H, util} from 'common'
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
  const xs = R.repeat (new Proposition (), i.length ?? 0)
  const x = xs[0]

  console.log (`i.length`, i.length)

  const left =
    R.is (Function, i)
      ? i (...xs)
      : i
  const right =
    R.is (Function, p)
      ? p (...xs)
      : p

  console.log (`left.left`, left.left)

  if (H.notEquals (left.left) (right) && H.notEquals (left.left) (right)) {
    throw new Error (`
      MP not used correctly 1: 
      left.left: ${H.toString (left.left)}
      right: ${H.toString (right)}
      i: ${H.toString (i)}
      p: ${H.toString (p)}
    `)
  }

  if (H.notEquals (left.right.left) (right) && H.notEquals (left.left) (right)) {
    throw new Error (`
      MP not used correctly 2: 
      left.left: ${left.right.left}
      right: ${right}
      i: ${i}
      p: ${p}
    `)
  }

  return left.right.right
}