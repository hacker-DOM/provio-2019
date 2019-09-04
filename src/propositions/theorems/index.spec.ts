
/* eslint-disable no-undef */
import {assert,S,R} from '../../common'
import * as B from '../../basic/types'
import * as A from '../axioms'
import * as T from '../types'

import registerRequireContextHook from 'babel-plugin-require-context-hook/register'
registerRequireContextHook()

describe (`Theorems`, function () {
  const req = require.context(`.`, false, /\d+.js$/)
  const cache = {}
  const importAll = req => {
    req.keys().forEach(key => cache[key] = req(key));
  }
  importAll(req)

  const axioms = [A.H1, A.H2, A.H3]
  const inferences = [A.MP]

  R.mapObjIndexed (({default: val}, key) => {
    it (`verifying proof of ${key}: ${val.name}`, function () {
      const state = T._state (axioms) (inferences)
      val.proof(state)
      const x = B._var()
      // assert.deepEqual (state.proposition(x), val.proposition(x))
    })
  }) (cache)
  
})