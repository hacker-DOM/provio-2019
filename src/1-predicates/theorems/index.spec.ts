// import H from 'common'
import * as R from 'ramda'
import {assert} from 'chai'
import implReflex from './impl-reflex'
import {PropositionalAtom} from '../primitives'

const p = new PropositionalAtom ()

console.info (`${implReflex.name}`)
assert (R.equals (implReflex.WTS (p), implReflex.proof (p)))
