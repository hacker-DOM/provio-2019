import {and, exists, implies} from 'predicates'
import {_in} from './in'

bi (`in`, _in)
bi (`<=`, subset)
bi (`===`, equals)
bi (`&`, and)
bi (`>>`, implies)

export var

subset = (x, y) => z => (z in x) >> (z in y),

equals = (x, y) => (x <= y) & (y <= x),

isEmpty = x => y => !(y in x),

// isUnique = x => p => (y => p (y) >> (y === x)),

isUnique = p => x => y => ((p (x) & p (y)) >> x === y),

// existsUnique = ((Pr.exists (p)) & isUnique (x) (p))
existsUnique = p => exists (p) & isUnique (p)
