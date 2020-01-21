import {H1, H2, MP} from '../axioms'
import {implies} from '../connectives'
import {Theorem} from '../theorem'

bi (`>>`, implies)

const NAME = `x >> x`

const WTS = (x) => x >> x

const proof = () => {
  const h1_1 = (x) => H1 (x, x >> x)
  const h2_1 = (x) => H2 (x, x >> x, x)
  const mp_1 = MP ({implication: h2_1, proposition: h1_1})
  const h1_2 = (x) => H1 (x, x)
  const mp_2 = MP ({implication: mp_1, proposition: h1_2})
  return mp_2
}

export default new Theorem (NAME, WTS, proof)