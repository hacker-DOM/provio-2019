/* eslint-disable no-undef */
import {assert,H,R} from '../../common'
import P from '../../propositions'
import Pr from '../../predicates'
import S from '..'

import requireContext from 'babel-plugin-require-context-hook/register.js'
requireContext()

describe (`Theorems`, function () {
  const req = require.context(`.`, false, /\d+.ts$/)
  const cache = {}
  const importAll = req => {
    req.keys().forEach(key => cache[key] = req(key))
  }
  importAll(req)
  
  const {H1, H2, H3} = P
  const {ZF1, ZF2} = S
  const axioms = {H1, H2, H3, ZF1, ZF2}

  R.mapObjIndexed (({default: theorem}, key) => {
    it (`verifying proof of ${key}: ${theorem.name}`, function () {
      const state = P._state (axioms)
      theorem.proof (state)
      const x = R.last (state.vars())
      const p = state.proposition()
      assert (R.equals (state.proposition()) (theorem.proposition (x)))
    })
  }) (cache)
  
})