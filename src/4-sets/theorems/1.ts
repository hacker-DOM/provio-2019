import * as B from 'basic'
import * as Pr from 'propositions'
import * as S from '..'
bi (`>>`, Pr.implies)

const NAME = `There exists unique empty set`

const WTS = x => S.existsUnique (x) (S.isEmpty)

const proof = () => {
  const zf2_1 = S.ZF2 ()
  const [x, pr] = addExistsVar (zf2_1) ([])

  // return
}

export default B.theorem (NAME, WTS, proof)