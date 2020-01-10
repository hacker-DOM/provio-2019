import {R, H, util} from 'common'
import * as B from 'basic'
import * as P from 'propositions'
import {exists as ex} from 'predicates'
import * as T from '.'

un (`!`, P.not)
bi (`in`, T.in)

// Null set axiom (There exists an empty set)
// const ZF2 = x => y => ex (x) (all (y) (!(x in y)))
export const ZF2 = () => ex (x => T._isEmpty (x))
