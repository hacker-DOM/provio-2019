import {R} from './index'

export const debug = item => {
  debugger
  return item
}

/**
 * @description Non-pure
 * @example 
 */
export const pushOrCreateAndReturn = prop => el => arr => {
  arr[prop] ? arr.push(el) : arr = []
  return el
}

/**
 * @description Non-pure
 * @example 
 */
export const pushAndReturn = el => arr => {
  arr.push (el)
  return el
}

/**
 * @description TODO: Rewrite fp
 * @example 
 */
export const uncurry = fn => args => {
  let toReturn = fn (args[0])
  for (let i = 1; i < args.length; i++) {
    toReturn = toReturn (args[i])
  }

  return toReturn
}

/* Doesn't use babel to make it runnable with node */
export const logEach = arr => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log(`Logging`, Object.keys({arr})[0])
  R.map (console.log) (arr)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}

export const log = _var => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log(`Logging`, Object.keys({ _var })[0])
  R.map(console.log)(arr)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
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

