import {assert} from 'chai'
import * as R from 'ramda'
import flat from 'flat'

const is_instance_rec = (obj, model_unrealized, vars, solutions) => {
  const model = model_unrealized (...vars)
  const [obj_flat, model_flat] = R.map (flat, [obj, model])
  const [obj_flat_keys, model_flat_keys] = R.map (R.keys, [obj_flat, model_flat])
  const [
    obj_flat_keys_length, model_flat_keys_length
  ] = (
    R.map (R.length, [obj_flat_keys, model_flat_keys])
  )

  assert (obj_flat_keys_length === model_flat_keys_length)

  const model_flat_keys_arr = R.map (R.split (`.`), model_flat_keys)
  // console.log (`model_flat_keys_arr`,model_flat_keys_arr)

  /* eslint-disable-next-line array-callback-return */
  R.map (path => {
    const val_model = R.path (path, model)
    const val_obj = R.path (path, obj)
    if (R.startsWith (`IS_INSTANCE`, val_model)) {
      const pos = parseInt (R.split (`__`, val_model)[1], 10)
      const _vars = R.adjust (pos, R.always (val_obj), vars)
      solutions = R.adjust (pos, R.always (val_obj), solutions)
      return is_instance_rec (obj, model_unrealized, _vars, solutions)
    }

    assert (val_obj === val_model)
  }) (model_flat_keys_arr)

  return solutions
}

export const is_instance = (obj, model_unrealized) => {
  /* Length of model */
  const length = model_unrealized.length
  /* Create dummy strings for each param */
  const vars = R.times (i => `IS_INSTANCE__${i}`) (length)
  /* Create dummy array for solutions */
  let solutions = R.repeat (null) (length)
  /* Run recursively */
  return is_instance_rec (obj, model_unrealized, vars, solutions)
}
