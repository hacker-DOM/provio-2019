import * as util from 'util'
import {R} from './common'
import {Proposition} from '../1-predicates/proposition'
import assert from 'assert'

export const

toString = R.cond ([
  [R.is (Function), x => x.toString ()],
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

test = (theorem, _test, _test2) => (
  describe (``, () => {
    it (`${theorem.name}`, () => {
      const

      x = new Proposition (),
      y = new Proposition (),
      {WTS} = theorem,
      [] = [console.log (`WTS`, WTS)],
      // wts = WTS (x, y)
      proof = theorem.proof (),
      [] = [console.log (`proof`, proof)]
      // assert (R.equals (wts, proof))
      assert (equals (WTS, theorem.proof ()))
    })
  })
)