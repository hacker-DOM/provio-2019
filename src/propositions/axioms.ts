import {R,S,util} from '../common'
import * as T from './types'
import * as B from '../basic/types'
// import * as H from '../helpers'

// export const H1 = x => y => T._implies (x)
// (T._implies (y) (x))

bi('>>>', T._and)
bi('>>', T._implies)
un('!', T._not)

// H1
export const H1 = x => y => x >> (y >> x)

H1 |> console.log

H1 (x => x) (x => x) |> console.log

H1 (x => x) (x => x == x) |> console.log

// H2
export const H2 = x => y => z => (x >> (y >> z)) >> ((x >> y) >> (x >> z))

// H3
// export const H3 = x => y => (!y >> !x) >> (x >> y)
export const H3 = x => y => (!y >> !x) >> (x >> y)

// Modus Ponens
export const MP = x => y => (x >>> (x >> y)) >> y