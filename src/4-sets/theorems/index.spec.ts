/* eslint-disable no-undef */
import {R} from 'common'
import * as B from 'basic'
import _1 from './1'
import assert from 'assert'

describe (`Propositions`, () => {
  it (`Verifying ${_1.name}`, () => {
    const x = B.proposition ()
    const {WTS} = _1
    const left = WTS (x)
    const right = _1.proof () (x)
    assert (R.equals (left, right))
  })
})