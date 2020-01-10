import * as B from 'basic'
import * as P from '..'
import {H1, H2, MP} from '../axioms'

bi (`>>`, P.implies)

const NAME = `x >> x`

const WTS = (x: B._Proposition): B._Proposition => x >> x

const proof = () => {
  const h1_1 = (x: B._Proposition) => H1 (x, x >> x)
  const h2_1 = (x: B._Proposition) => H2 (x, x >> x, x)
  const mp_1 = MP ({implication: h2_1, proposition: h1_1})
  const h1_2 = (x: B._Proposition) => H1 (x, x)
  const mp_2 = MP ({implication: mp_1, proposition: h1_2})
  return mp_2
}

export default B.theorem (NAME, WTS, proof)