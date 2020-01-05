/* eslint-disable max-lines */
import {R} from './index'
import fs from 'fs'
import path from 'path'

export const debug = item => {
  debugger
  return item
}

/**
 * @description Serialize list of variables by id
 * @example serialize([x,y,z]) === `0,1,2`
 */
export const serialize = R.pipe (
  R.sortBy (R.prop (`id`)),
  R.map (v => v.id?.toString() || ``),
  R.join (`,`))

/**
 * @description Non-pure
 * @example
 */
export const pushOrCreateAndReturn = prop => el => obj => {
  const arr = obj[prop]
  arr ? arr.push (el) : obj[prop] = []
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
  console.log (`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
  console.log (`Logging`, Object.keys ({arr})[0])
  R.map (console.log) (arr)
  console.log (`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
}

/**
 * @description Like reduce, but you get (acc, val, idx, obj) for every element
 */
export const reduceIndexed = R.addIndex (R.reduce)
