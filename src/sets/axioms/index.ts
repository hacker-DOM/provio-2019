import {R,S,util} from '../../common'
import * as B from '../../basic/types'
import * as P from '../../propositions/types'
import * as Pr from '../../predicates/types'
import * as T from '../types'
// import * as H from '../helpers'

const x = B._var()
const y = B._var()
const z = B._var()

un('!', P._not)
bi('==', P._equiv)
bi('===', T._equals)
bi('in', T._in)
const all = Pr._forAll
const ex = Pr._exists

/* eslint-disable indent*/
// ZF1: Axiom of extensionality
// const ZF1 = 
// Pr._forAll (x)
//   (Pr._forAll (y)
//     (P._equiv
//       (T._equals (x) (y))
//       (Pr._forAll (z)
//         (P._equiv 
//           (T._in (z) (x))
//           (T._in (z) (y))
//         )
//       )
//     )
//   )

// ZF1: Axiom of extensionality
const ZF1 = x => y => all (x) (all (y) ((x === y) == (all (z) ((z in x) == (z in y)))))

// ZF2: Null set axiom
// const ZF2 = 
// Pr._exists (x)
//   (Pr._forAll (y)
//     (!
//       (T._in (x) (y))
//     )
//   )

// Null set axiom (There exists an empty set)
const ZF2 = x => y => ex (x) (all (y) (!(x in y)))

ZF1 (x) (y) |> console.log
ZF2 (x) (y) |> console.log
