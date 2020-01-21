/* eslint-disable no-undef */
import {R} from 'common'
import {Proposition as P} from '../proposition'
import _1 from './1'
import assert from 'assert'

describe (`Propositions`, () => {
  it (`Verifying ${_1.name}`, () => {
    const x = new P ()
    const {WTS} = _1
    const left = WTS (x)
    const right = _1.proof () (x)
    assert (R.equals (left, right))
  })
})