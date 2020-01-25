import * as R from 'ramda'
import flat from 'flat'

export const get_shape = (obj) => {
  const obj_flat = flat (obj)
  const obj_flat_keys = R.keys (obj_flat)
  const obj_flat_keys_arr = R.map (R.split (`.`), obj_flat_keys)
  const leaves = R.map (p => R.path (p, obj)) (obj_flat_keys_arr)
  const uniq = R.uniq (leaves)

  // console.log (`obj_flat_keys_arr`, obj_flat_keys_arr)

  return (...args) => {
    const _obj = R.reduce ((acc, path) => {
      const lens = R.lensPath (path)
      const previousVal = R.path (path, obj)
      const idx = R.findIndex (R.equals (previousVal)) (uniq)
      const val = args[idx]
      const newAcc = R.set (lens, val, acc)
      return newAcc
    }) ({}) (obj_flat_keys_arr)
    return _obj
  }
}