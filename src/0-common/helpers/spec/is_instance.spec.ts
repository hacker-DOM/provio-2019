import * as R from 'ramda'
import {assert} from 'chai'
import {is_instance} from '../is_instance'
import {shape, shape2, shape3} from './shapes'

const obj = shape (1)
const obj2 = shape2 (1, 2)
const obj3 = shape3 (3, 2, 1)

console.log (`is_instance test 1`)
assert (R.equals (is_instance (shape, obj), [1]))

console.log (`is_instance test 2`)
assert (R.equals (is_instance (shape2, obj2), [1, 2]))

console.log (`is_instance test 3`)
assert (R.equals (is_instance (shape3, obj3), [3, 2, 1]))

console.log (`is_instance test 4`)
obj3.left.left.right = 5
assert.throws (() => is_instance (shape3, obj3))
