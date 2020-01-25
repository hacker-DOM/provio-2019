import {assert} from 'chai'
import * as R from 'ramda'
import flat from 'flat'

const is_instance_rec = (shape_unrealized, vars, solutions, obj) => {
  const shape = shape_unrealized (...vars)
  const [obj_flat, shape_flat] = R.map (flat, [obj, shape])
  const [obj_flat_keys, shape_flat_keys] = R.map (R.keys, [obj_flat, shape_flat])
  const [
    obj_flat_keys_length, shape_flat_keys_length
  ] = (
    R.map (R.length, [obj_flat_keys, shape_flat_keys])
  )

  assert (obj_flat_keys_length === shape_flat_keys_length)

  const shape_flat_keys_arr = R.map (R.split (`.`), shape_flat_keys)
  // console.log (`shape_flat_keys_arr`,shape_flat_keys_arr)

  /* eslint-disable-next-line array-callback-return */
  R.map (path => {
    const val_shape = R.path (path, shape)
    const val_obj = R.path (path, obj)
    if (R.startsWith (`IS_INSTANCE`, val_shape)) {
      const pos = parseInt (R.split (`__`, val_shape)[1], 10)
      const _vars = R.adjust (pos, R.always (val_obj), vars)
      solutions = R.adjust (pos, R.always (val_obj), solutions)
      return is_instance_rec (shape_unrealized, _vars, solutions, obj)
    }

    assert (val_obj === val_shape)
  }) (shape_flat_keys_arr)

  return solutions
}

export const is_instance = R.curry ((shape_unrealized, obj) => {
  /* Length of shape */
  const length = shape_unrealized.length
  /* Create dummy strings for each param */
  const vars = R.times (i => `IS_INSTANCE__${i}`) (length)
  /* Create dummy array for solutions */
  let solutions = R.repeat (null) (length)
  /* Run recursively */
  return is_instance_rec (shape_unrealized, vars, solutions, obj)
})