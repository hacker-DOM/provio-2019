import * as T from '../types'
import * as R from '../../common'
import { genCombinations } from '../../common/helpers'

const x = T._var()
const y = T._var()
const z = T._var()

x.toString = () => `x`
y.toString = () => `y`
z.toString = () => `z`

// x.toString() |> console.log
// y.toString() |> console.log
// z.toString() |> console.log

const sets = {}
const know = new Map()

// const addToSets = sets => variable => {

// }

// R.map (addToSets (sets)) ([x, y, z])

genCombinations([`x`,`y`,`z`]) |> console.log


