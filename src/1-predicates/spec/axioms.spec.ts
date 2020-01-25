import H from 'common'
import {H1_} from '../axioms'
const {is_instance} = H
const h1 = new H1_ (1, 2)
const isInstance = is_instance (H1_.evalAny, h1.eval ())
console.log (`isInstance`, isInstance)