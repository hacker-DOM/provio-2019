import {not, and, implies} from '../helpers'
import {Theorem} from '../primitives'

un (`!`, not)
bi (`&`, and)
bi (`>>`, implies)

const

NAME = `Conjunction Introduction`,

WTS = (x, y) => x >> (y >> (x & y)),

proof = () => {}

/* eslint-disable-next-line */
const theorem = new Theorem (NAME, WTS, proof)
// H.test (theorem)
export default WTS