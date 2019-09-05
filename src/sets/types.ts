import P from '../propositions'
import Pr from '../predicates'

un('!', P._not)
bi('>>', P._implies)
bi('&', P._and)

export class _In {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _in = x => y => new _In(x, y)
bi('in', _in)

export const _subset = x => y => z => (z in x) >> (z in y)
bi('<=', _subset)

export const _equals = x => y => (x <= y) & (y <= x)

export const _isEmpty = x => y => !(y in x)

bi('===', _equals)

/**
 * @description Non-pure
 * @example 
 */
/* export const _existsUnique = pr => state => {
  const x = Pr._exists (pr) (state)
  state.addGeneral(y => (pr (y)) >> (y === x))
  return x
} */

export const _isUnique = x => p => (y => p (y) >> (y === x))

export const _existsUnique = x => p => ((Pr._exists (p)) & _isUnique (x) (p))