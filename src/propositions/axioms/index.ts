import {R,S,util} from '../../common'
import * as T from '../types'
import * as B from '../../basic/types'
// import * as H from '../helpers'

// export const H1 = x => y => T._implies (x)
// (T._implies (y) (x))

bi('&&', T._and)
bi('>>', T._implies)
un('!', T._not)

// H1
export const H1 = x => y => x >> (y >> x)

// H2
export const H2 = x => y => z => (x >> (y >> z)) >> ((x >> y) >> (x >> z))

// H3
// export const H3 = x => y => (!y >> !x) >> (x >> y)
export const H3 = x => y => (!y >> !x) >> (x >> y)

// Modus Ponens
export const MP = x => y => (x && (x >> y)) >> y

const x = B._var()
const y = B._var()
const z = B._var()

const h2 = H2 (x) (y) (z)

console.log(h2)

const h3 = H3 (x) (y)

console.log(h3)

export const log = () => {}

export const enhanceState = state => {
  state.addAxiom(H1)
  state.addAxiom(H2)
  state.addAxiom(H3)
  state.addInference(MP)
  return state
}

export const _state = () => enhanceState (B._state())