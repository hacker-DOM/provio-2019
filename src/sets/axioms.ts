import {R,H,util} from '../common'
import B from '../basic'
import P from '../propositions'
import {_exists as ex} from '../predicates'
import T from '.'

un('!', P._not)
bi('in', T._in)

// Null set axiom (There exists an empty set)
// const ZF2 = x => y => ex (x) (all (y) (!(x in y)))
/**
 * @description Non-pure
 * @example 
 */
export const ZF2 = ex (x => T._isEmpty (x))
