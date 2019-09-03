import * as P from '../../propositions/types'
import * as Pr from '../../predicates/types'
import * as T from '../types'

bi('&&', P._and)
bi('>>', P._implies)
bi('===', T._equals)
const ex = Pr._exists
const all = Pr._forAll

// export const _existsUnique = x => y => z => (ex (x) (y)) && (all (z) ((z `satisfies` y) >> z === x))

// export const _existsUnique = pr => (ex (pr)) && (all (z) (pr) >> z === )

export const _existsUnique = x => y => z => {
  
}