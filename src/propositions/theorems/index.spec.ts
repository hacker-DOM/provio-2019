
/* eslint-disable no-undef */
import {assert,S,R} from '../../common'
import * as B from '../../basic/types'
import * as A from '../axioms'
import Theorem from './index'

describe (`Thereoms`, function () {
  describe (`A == A`, function () {
    it (`should return the proposition`, function () {
      const state = A._state()
      Theorem.proof(state)
      const x = B._var()
      assert.deepEqual (state.proposition(x), Theorem.proposition(x))
    })
  })
})