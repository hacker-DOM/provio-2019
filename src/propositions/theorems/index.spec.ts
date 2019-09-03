
/* eslint-disable no-undef */
import {assert,S,R} from '../../common'
import * as B from '../../basic/types'
import * as A from '../axioms'
import registerRequireContextHook from 'babel-plugin-require-context-hook/register'
registerRequireContextHook()

describe (`Theorems`, function () {
  // const importAll = (r) => {
  //   r.keys().forEach(r)
  // }
  const r = require.context(`.`, false, /\d+.js$/)
  
  const cache = {}
  
  importAll(r)
  function importAll (r) {
    r.keys().forEach(key => cache[key] = r(key));
  }

  cache |> console.log

  // Object.keys(require('module')._cache) |> console.log

  R.mapObjIndexed (({default: val}, key) => {
    it (`verifying proof of ${key}`, function () {
      const state = A._state()
      val.proof(state)
      const x = B._var()
      assert.deepEqual (state.proposition(x), val.proposition(x))
    })
  }) (cache)
  
})