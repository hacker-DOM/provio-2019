import {nand} from './primitives'

bi (`^`, nand)
un (`!`, not)
bi (`>>`, implies)
bi (`&`, and)

export const

not = x => x ^ x,

implies = (x, y) => x ^ (x ^ y),

and = (x, y) => !(x >> !y),

or = (x, y) => !x >> y,

equiv = (x, y) => (x >> y) & (y >> x),

exists = p => !(x => !p (x))
