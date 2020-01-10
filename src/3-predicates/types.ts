/* Language of predicate logic consists of:
1. a set of *constant symbols*
2. a set of *functional symbols*, each with a specified arity
3. a set of *relational symbols*, each with a specified arity
4. an unlimited set of *variables*
5. the propositional connectives $\lnot, \land, \lor, \implies, \equiv$
6. the quantifiers $\forall$ and $\exists$
7. parens */
import {R, H} from 'common'
import * as B from 'basic'

export class _Exists {
  constructor (public x: B._Proposition) {}
}

export const _exists = R.construct (_Exists)