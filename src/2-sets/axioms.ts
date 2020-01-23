import {R, H, util} from 'common'
import {exists} from 'predicates'
import {isEmpty} from './helpers'

// Null set axiom (There exists an empty set)
export const ZF2 = () => exists (isEmpty)