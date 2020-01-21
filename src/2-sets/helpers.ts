import {_in} from './in'

bi (`in`, _in)
bi (`<=`, subset)
bi (`===`, equals)

export var

subset = (x, y) => z => (z in x) >> (z in y),

equals = (x, y) => (x <= y) & (y <= x),

isEmpty = x => y => !(y in x),

isUnique = x => p => (y => p (y) >> (y === x)),

existsUnique = x => p => ((Pr.exists (p)) & isUnique (x) (p))