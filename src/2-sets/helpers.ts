import {and, exists, implies, not} from 'predicates'
import {_in} from './primitives/in'

bi (`in`, _in)
bi (`<=`, subset)
bi (`===`, equals)
bi (`&`, and)
bi (`>>`, implies)
un (`!`, not)

export const

subset = (x, y) => z => (z in x) >> (z in y),

equals = (x, y) => (x <= y) & (y <= x),

isEmpty = x => y => !(y in x),

isUnique = p => (x, y) => ((p (x) & p (y)) >> x === y),

existsUnique = p => exists (p) & isUnique (p)
