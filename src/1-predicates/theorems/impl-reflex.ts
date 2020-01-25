import {H1, H2} from '../axioms'
import inferences from '../inferences'
import {implies} from '../helpers'
import {Theorem} from '../primitives'

bi (`>>`, implies)

const

{ModusPonens} = inferences,

NAME = `Implication Reflexivity`,

WTS = (x) => x >> x,

proof = (arg) => {
  const

  h1_1 = H1 (arg, arg >> arg),
  h2_1 = H2 (arg, arg >> arg, arg),
  /* eslint-disable-next-line */
  mp_1 = ModusPonens ({implication: h2_1, proposition: h1_1}),
  h1_2 = H1 (arg, arg),
  /* eslint-disable-next-line */
  mp_2 = ModusPonens ({implication: mp_1, proposition: h1_2})

  return mp_2
},

// /* eslint-disable-next-line no-unused-vars */
theorem = new Theorem (NAME, WTS, proof)
// console.info (`${theorem.name}`)
// assert (equals (WTS, proof))
export default theorem