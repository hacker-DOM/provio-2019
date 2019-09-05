/* Language of predicate logic consists of:
1. a set of *constant symbols*
2. a set of *functional symbols*, each with a specified arity
3. a set of *relational symbols*, each with a specified arity
4. an unlimited set of *variables*
5. the propositional connectives $\lnot, \land, \lor, \implies, \equiv$
6. the quantifiers $\forall$ and $\exists$
7. parens */
import {R} from '../common'
import B from '../basic'

export class _Exists {
  constructor (x) {
    this.x = x
  }
}

export const _exists = p => new _Exists (p)

export class _State extends B._State {
  /* Exist claims */
  addExistsVar = pr => (...args) => {
    if (R.is (Pr._Exists) (pr)
      && R.indexOf (pr) (this.#predicates[args |> H.serialize]) >= 0) {
      const x = this.addVar()
      const pr = this.addPr ([x]) (pr.x)
      return [x, pr]
    } else {
      throw new Error(`addExistsVar not used correctly: ${pr}, ${args}`)
    }
  }
}

export const _state = axioms => new _State (axioms)