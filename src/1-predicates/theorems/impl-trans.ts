import {and, implies} from '../helpers'
import {Theorem} from '../primitives'
// import lemma from './conj-intro'

bi (`>>`, implies)
bi (`&`, and)

const

NAME = `Implication Transitivity`,

WTS = (x, y, z) => ((x >> y) & (y >> z)) >> (x >> z),

/* https://www.wikiwand.com/en/Hypothetical_syllogism#/Proof */
proof = () => {}

/* eslint-disable-next-line */
const theorem = new Theorem (NAME, WTS, proof)
// H.test (theorem)
export default WTS