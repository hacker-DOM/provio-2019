/* eslint-disable no-undef */
import {assert,S,R} from '../../common'
import * as B from '../../basic/types'
import * as A from '../axioms'
import * as T from '../types'

import requireContext from 'babel-plugin-require-context-hook/register.js'
requireContext()

describe (`Theorems`, function () {
  const req = require.context(`.`, false, /\d+.ts$/)
  const cache = {}
  const importAll = req => {
    req.keys().forEach(key => cache[key] = req(key));
  }
  importAll(req)
  
  const axioms = {'H1': A.H1, 'H2': A.H2, 'H3': A.H3}
  const inferences = {'MP': A.MP}

  R.mapObjIndexed (({default: theorem}, key) => {
    it (`verifying proof of ${key}: ${theorem.name}`, function () {
      const state = T._state (axioms) (inferences)
      theorem.proof (state)
      const x = R.last (state.vars())
      const p = state.proposition()
      assert (R.equals (state.proposition()) (theorem.proposition (x)))
    })
  }) (cache)
  
})