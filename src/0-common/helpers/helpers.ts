import * as R from 'ramda'
import * as util from 'util'
import assert from 'assert'
import {Proposition} from '../../1-predicates'

export const

toString = R.cond ([
  [R.is (Function), x => `${x.name}: ${x.toString ()}`],
  [R.is (Object), util.inspect],
  [R.T, R.identity]
]),

equals = R.curry ((f, g) => {
  if (!f || !g) {
    return false
  }

  if (R.is (Function, f) && R.is (Function, g)) {
    const minLength = Math.min (f.length, g.length)
    const xs = R.repeat (new Proposition) (minLength)
    return equals (f (...xs)) (g (...xs))
  }

  if (R.is (Proposition, f) && R.is (Proposition, g)) {
    return true
  }

  return equals (f.left, g.left) && equals (f.right, g.right)
}),

notEquals = R.complement (equals),

test = (theorem) => {
  console.info (`${theorem.name}`)
  const

  {WTS} = theorem,
  proof = theorem.proof ()
  assert (equals (WTS, proof))
}