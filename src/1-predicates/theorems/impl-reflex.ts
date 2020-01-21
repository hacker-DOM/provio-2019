import {H} from 'common'
import {H1, H2, MP} from '../axioms'
import {implies} from '../helpers'
import {Theorem} from '../theorem'

bi (`>>`, implies)

const

NAME = `Implication Reflexivity`,

WTS = (x) => x >> x,

proof = () => {
  const

  h1_1 = (x) => H1 (x, x >> x),
  h2_1 = (x) => H2 (x, x >> x, x),
  mp_1 = MP ({implication: h2_1, proposition: h1_1}),
  h1_2 = (x) => H1 (x, x),
  mp_2 = MP ({implication: mp_1, proposition: h1_2})

  return mp_2
},

theorem = new Theorem (NAME, WTS, proof)

H.test (theorem)