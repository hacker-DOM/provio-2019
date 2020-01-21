import {R} from './common'
import {Proposition} from '../1-predicates/proposition'
import assert from 'assert'

export const

notEquals = R.complement (R.equals),

test = (theorem, _test, _test2) => (
  describe (``, () => {
    it (`${theorem.name}`, () => {
      const

      x = new Proposition (),
      y = new Proposition (),
      {WTS} = theorem,
      wts = WTS (x, y)
      const proof = theorem.proof () (x, y)
      assert (R.equals (wts, proof))
    })
  })
)