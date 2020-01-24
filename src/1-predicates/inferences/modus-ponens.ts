import * as R from 'ramda'
import H from 'common'
import {Proposition} from '../primitives'

export default ({implication: i, proposition: p}) => {
  /* This following logic is not so intuitive */
  /* But that's because `implies` is actually a complex `Nand` */
  const xs = R.repeat (new Proposition (), i.length ?? 0)

  const left =
    R.is (Function, i)
      ? i (...xs)
      : i
  const right =
    R.is (Function, p)
      ? p (...xs)
      : p

  if (H.notEquals (left.left) (right)) {
    throw new Error (`
      MP not used correctly 1: 
      left.left: ${H.toString (left.left)}
      right: ${H.toString (right)}
      i: ${H.toString (i)}
      p: ${H.toString (p)}
    `)
  }

  if (H.notEquals (left.right.left) (right)) {
    throw new Error (`
      MP not used correctly 2: 
      left.left: ${H.toString (left.right.left)}
      right: ${H.toString (right)}
      i: ${H.toString (i)}
      p: ${H.toString (p)}
    `)
  }

  return left.right.right
}