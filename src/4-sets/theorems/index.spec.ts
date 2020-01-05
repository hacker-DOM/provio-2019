// /* eslint-disable no-undef */
// import {requireContext, assert, H, R} from 'common'
// import P from 'propositions'
// import Pr from 'predicates'
// import S from '..'

// requireContext ()

// describe (`Sets`, function () {
//   const req = require.context (`.`, false, /\d+.ts$/)
//   const cache = {}
//   const importAll = req => {
//     req.keys ().forEach (key => cache[key] = req (key))
//   }
//   importAll (req)

//   const {H1, H2, H3} = P
//   const {ZF2} = S
//   const axioms = {H1, H2, H3, ZF2}

//   R.mapObjIndexed (({default: theorem}, key) => {
//     it (`verifying proof of ${key}: ${theorem.name}`, function () {
//       const state = P._state (axioms)
//       theorem.proof (state)
//       const x = state.vars ()[0]
//       /* Hacky.. */
//       const y = R.last (state.vars ())
//       assert (R.equals (state.proposition (x)) (theorem.proposition (x)))
//     })
//   }) (cache)

// })