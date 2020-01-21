import {_in} from './in'

bi (`in`, _in)

export const subset = (x, y) => z => (z in x) >> (z in y)
bi (`<=`, subset)

export const equals = (x, y) => (x <= y) & (y <= x)

export const isEmpty = x => y => !(y in x)

bi (`===`, equals)

export const isUnique = x => p => (y => p (y) >> (y === x))

export const existsUnique = x => p => ((Pr.exists (p)) & isUnique (x) (p))