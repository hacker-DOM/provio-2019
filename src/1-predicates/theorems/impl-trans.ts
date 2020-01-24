import * as R from 'ramda'
import H from 'common'
import {H1, H2, MP} from '../axioms'
import {and, implies} from '../helpers'
import {Theorem} from '../primitives/theorem'
import {Proposition} from '../primitives/proposition'
import lemma from './conj-intro'

bi (`>>`, implies)
bi (`&`, and)

const

NAME = `Implication Transitivity`,

WTS = (x, y, z) => ((x >> y) & (y >> z)) >> (x >> z),

/* https://www.wikiwand.com/en/Hypothetical_syllogism#/Proof */
proof = () => {}

const theorem = new Theorem (NAME, WTS, proof)
// H.test (theorem)
export default WTS