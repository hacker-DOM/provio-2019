import H from 'common'
import {H1, H2} from '../axioms'
import inferences from '../inferences'
import {implies} from '../helpers'
import {Theorem} from '../primitives'

bi (`>>`, implies)

const

{ModusPonens} = inferences,

NAME = `Implication Reflexivity`,

WTS = (x) => x >> x,

proof = () => {
  const

  h1_1 = (x) => H1 (x, x >> x),
  h2_1 = (x) => H2 (x, x >> x, x),
  /* eslint-disable-next-line */
  mp_1 = (x) => ModusPonens ({implication: h2_1, proposition: h1_1}),
  h1_2 = (x) => H1 (x, x),
  /* eslint-disable-next-line */
  mp_2 = (x) => ModusPonens ({implication: mp_1, proposition: h1_2})

  return mp_2
},

theorem = new Theorem (NAME, WTS, proof)
H.test (theorem)
export default WTS