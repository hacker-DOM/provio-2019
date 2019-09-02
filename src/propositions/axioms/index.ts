import {R,S,util} from '../../common'
import * as T from '../types'
import * as B from '../../basic/types'
// import * as H from '../helpers'

// export const H1 = x => y => T._implies (x)
// (T._implies (y) (x))

bi(">>", T._implies)
un("!", T._not)

// H1
export const H1 = x => y => x >> (y >> x)

// H2
export const H2 = x => y => z => (x >> (y >> z)) >> ((x >> y) >> (x >> z))

// H3
// export const H3 = x => y => (!y >> !x) >> (x >> y)
export const H3 = x => y => (!y >> !x) >> (x >> y)

const x = B._var()
const y = B._var()
const z = B._var()

const h2 = H2 (x) (y) (z)

console.log(h2)

const h3 = H3 (x) (y)

console.log(h3)