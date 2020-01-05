/* eslint-disable no-undef */
import {requireContext, assert, R} from 'common'
import B from 'basic'
import P from '..'

requireContext ()

describe (`Propositions`, function () {
  const req = require.context (`.`, false, /\d+.ts$/)
  const cache = {}
  const importAll = req => {
    req.keys ().forEach (key => cache[key] = req (key))
  }
  importAll (req)

  const {H1, H2, H3} = P
  const axioms = {H1, H2, H3}

  R.mapObjIndexed (({default: theorem}, key) => {
    it (`verifying proof of ${key}: ${theorem.name}`, function () {
      const state = B._state (axioms)
      theorem.proof (state)
      /* Hacky */
      const x = R.last (state.vars)
      assert (R.equals (state.proposition) (theorem.proposition (x)))
    })
  }) (cache)

})