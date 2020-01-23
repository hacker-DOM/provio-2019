import {R, H} from 'common'
import {H1, H2, MP} from '../axioms'
import {not, equiv} from '../helpers'
import {Theorem} from '../primitives/theorem'
import {Proposition} from '../primitives/proposition'
import lemma from './conj-intro'

un (`!`, not)
bi (`==`, equiv)

const

NAME = `Negation Elimination`,

WTS = (x) => !!x == x,

/* eslint-disable-next-line */
/* https://math.stackexchange.com/questions/1121542/how-do-i-prove-double-negation-elimination-in-a-propositional-logic-axiom-system */
proof = () => {}

const theorem = new Theorem (NAME, WTS, proof)
// H.test (theorem)
export default WTS