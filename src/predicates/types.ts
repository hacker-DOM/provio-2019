/* Language of predicate logic consists of:
1. a set of *constant symbols*
2. a set of *functional symbols*, each with a specified arity
3. a set of *relational symbols*, each with a specified arity
4. an unlimited set of *variables*
5. the propositional connectives $\lnot, \land, \lor, \implies, \equiv$
6. the quantifiers $\forall$ and $\exists$
7. parens */

class Exists 

/**
 * @description Non-pure
 * @example 
 */
export const _exists = pr => state => {
  const x = state.addVar()
  state.addPr ([x]) (pr)
  return x
}
