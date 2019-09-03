import * as T from '../types'
import * as H from '../helpers'
import {R,S} from '../../common'

const x = T._var()
const y = T._var()
const z = T._var()

x.toString = () => `x`
y.toString = () => `y`
z.toString = () => `z`

// x.toString() |> console.log
// y.toString() |> console.log
// z.toString() |> console.log

class _State {
  #vars = []

  get vars() {
    return this.#vars
  }

  appentVar() {
    // return R.append (el) (this.#vars)
    const _var = T._var()
    _var.id = this.#vars.length
    this.#vars.push (_var)
    return _var
  }

  #predicates = {}

  get predicates() {
    return this.#predicates
  }

  addPredicate (args, pr) {
    const s = H.serialize (args)
    this.#predicates[s].push (pr)
  }

  
  #MP() {
    
  }
}

const _state = () => new _State()

const state = _state()

const x_1 = state.appentVar()
const y_1 = state.appentVar()
const z_1 = state.appentVar()

H.serialize ([x_1, y_1, z_1]) |> console.log

const sets = {}
const know = new Map()

// const addToSets = sets => variable => {

// }

// R.map (addToSets (sets)) ([x, y, z])

// S.genCombinations([`x`,`y`,`z`])


