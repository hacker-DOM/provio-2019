import * as R from 'ramda'
import {assert} from 'chai'
import {get_shape} from '../get_shape'
import {shape, shape2, shape3} from './shapes'

const obj = shape (1)
const obj2 = shape2 (1, 2)
const obj3 = shape3 (3, 2, 1)

console.log (`get_shape test 1`)
assert (R.equals (obj, get_shape (obj) (1)))

console.log (`get_shape test 2`)
const obj2_1 = get_shape (obj2) (1, 2)
const obj2_2 = get_shape (obj2) (2, 1)
assert (
  R.equals (obj2, obj2_1) ||
  R.equals (obj2, obj2_2)
)

console.log (`get_shape test 3`)
assert (!R.equals (obj3, get_shape (obj3) (3, 1, 1)))

console.log (`get_shape test 4`)
const obj3_1 = get_shape (obj3) (1, 2, 3)
const obj3_2 = get_shape (obj3) (1, 3, 2)
const obj3_3 = get_shape (obj3) (2, 1, 3)
const obj3_4 = get_shape (obj3) (2, 3, 1)
const obj3_5 = get_shape (obj3) (3, 1, 2)
const obj3_6 = get_shape (obj3) (3, 2, 1)
assert (
  R.equals (obj3, obj3_1) ||
  R.equals (obj3, obj3_2) ||
  R.equals (obj3, obj3_3) ||
  R.equals (obj3, obj3_4) ||
  R.equals (obj3, obj3_5) ||
  R.equals (obj3, obj3_6)
)