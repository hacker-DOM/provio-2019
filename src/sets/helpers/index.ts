import * as P from '../../propositions/types'
import * as Pr from '../../predicates/types'
import * as T from '../types'

bi('&&', P._and)
bi('>>', P._implies)
bi('===', T._equals)
const ex = Pr._exists
const all = Pr._forAll

export const _existsUnique = x => pr1 => z => (ex (x) (y)) && (all (z) (() >> z === x))