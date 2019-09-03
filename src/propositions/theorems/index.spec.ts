
/* eslint-disable no-undef */
import {assert,S,R} from '../../common'
import * as B from '../../basic/types'
import * as A from '../axioms'
import registerRequireContextHook from 'babel-plugin-require-context-hook/register'
registerRequireContextHook()

describe (`Theorems`, function () {
  const req = require.context(`.`, false, /\d+.js$/)
  const cache = {}
  const importAll = req => {
    req.keys().forEach(key => cache[key] = req(key));
  }
  importAll(req)


  R.mapObjIndexed (({default: val}, key) => {
    it (`verifying proof of ${key}: ${val.name}`, function () {
      const state = A._state()
      val.proof(state)
      const x = B._var()
      assert.deepEqual (state.proposition(x), val.proposition(x))
    })
  }) (cache)
  
})