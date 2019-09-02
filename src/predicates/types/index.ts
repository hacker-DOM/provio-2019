// Language of predicate logic consists of:
// 1. a set of *constant symbols*
// 2. a set of *functional symbols*, each with a specified arity
// 3. a set of *relational symbols*, each with a specified arity
// 4. an unlimited set of *variables*
// 5. the propositional connectives $\lnot, \land, \lor, \implies, \equiv$
// 6. the quantifiers $\forall$ and $\exists$
// 7. parens

import * as P from '../../propositions/types'

export class _ForAll {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _forAll = x => y => new _ForAll(x, y)

// export class _Exists {
//   constructor (x: _Set, y: _Set): void {
//     this.x = x
//     this.y = y
//   }
// }

export const _exists = x => y => P._not (_forAll (x) (P._not (y)))