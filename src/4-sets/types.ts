import * as B from '1-basic'
import * as P from 'propositions'
import * as Pr from 'predicates'

un (`!`, P.not)
bi (`>>`, P.implies)
bi (`&`, P.and)

export class _In {
  constructor (public x: P, public y: P) {}
}

export const _in = x => y => new In (x, y)
bi (`in`, _in)

export const subset = x => y => z => (z in x) >> (z in y)
bi (`<=`, subset)

export const equals = x => y => (x <= y) & (y <= x)

export const isEmpty = x => y => !(y in x)

bi (`===`, equals)

/**
 * @description Non-pure
 * @example
 */
/* export const existsUnique = pr => state => {
  const x = Pr.exists (pr) (state)
  state.addGeneral(y => (pr (y)) >> (y === x))
  return x
} */

export const isUnique = x => p => (y => p (y) >> (y === x))

export const existsUnique = x => p => ((Pr.exists (p)) & isUnique (x) (p))