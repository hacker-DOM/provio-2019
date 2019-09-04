import {R} from './index'

export const debug = item => {
  debugger
  return item
}

/**
 * @description Like reduce, but you get (acc, val, idx, obj) for every element
 */
export const reduceIndexed = R.addIndex(R.reduce)

/**
 * @description Generate string with radix number system of fixed length
 */
export const genBitString = radix => length => num => {
  const bitString = num.toString (radix)
  return R.concat (`0`.repeat (length - bitString.length)) (bitString)
}

/** 
 * @description Generate combinations from array
 * @example genCombinations ([1, 2, 3]) === [[], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]]
 */
export const genCombinations = arr => {
  const length = arr.length
  return R.map (i => reduceIndexed 
    ((acc, val, idx) => val === `1` ? R.append (arr[idx]) (acc) : acc)
    ([])
    (genBitString (2) (length) (i))
  ) (R.range (0, 1 << length))
}

