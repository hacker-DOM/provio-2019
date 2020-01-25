import * as R from 'ramda'
import {assert} from 'chai'
import {is_instance} from './is-instance'

// class Var {
//   constructor (pos) {
//     this.pos = pos
//     this.id = uuid ()
//   }
// }

const _model = x => ({
  left: x,
  right: x,
})

const _model2 = (x, y) => ({
  left: x,
  right: {
    left: x,
    right: y,
  }
})

const _model3 = (x, y, z) => ({
  left: {
    left: {
      left: z,
      right: z,
    },
    right: y,
  },
  right: {
    left: {
      left: z,
      right: z,
    },
    right: {
      left: y,
      right: x,
    }
  }
})

const _obj = _model (1)
const _obj2 = _model2 (1, 2)
const _obj3 = _model3 (3, 2, 1)

console.log (`is_instance test 1`)
assert (R.equals (is_instance (_obj, _model), [1]))
console.log (`is_instance test 2`)
assert (R.equals (is_instance (_obj2, _model2), [1, 2]))
console.log (`is_instance test 3`)
assert (R.equals (is_instance (_obj3, _model3), [3, 2, 1]))
_obj3.left.left.right = 5
console.log (`is_instance test 4`)
assert.throws (() => is_instance (_obj3, _model3))
