import {R, H, util} from 'common'
import * as T from './types'
import * as B from 'basic/types'

bi (`>>`, T._implies)
un (`!`, T._not)

// H1
export const H1 = x => y => x >> (y >> x)

// H2
export const H2 = x => y => z => (x >> (y >> z)) >> ((x >> y) >> (x >> z))

// H3
export const H3 = x => y => (!y >> !x) >> (x >> y)
