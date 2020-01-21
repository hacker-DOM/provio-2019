import {R, H, util} from 'common'
import {exists, isEmpty} from './helpers'

// Null set axiom (There exists an empty set)
// const ZF2 = x => y => ex (x) (all (y) (!(x in y)))
// export const ZF2 = () => ex (x => T.isEmpty (x))
export const ZF2 = () => exists (isEmpty)