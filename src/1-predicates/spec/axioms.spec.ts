import H from 'common'
import {H1} from '../axioms'
import {assert} from 'chai'

const {is_instance} = H
const h1 = new H1 (1, 2)
const isInstance = is_instance (H1.evalAny, h1.eval ())
console.log (`H1`)
assert (isInstance)