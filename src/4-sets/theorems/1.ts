import * as B from 'basic'
import * as Pr from 'propositions'
import * as S from '..'

bi (`>>`, Pr.implies)

const NAME = `There exists unique empty set`

const WTS = x => S._existsUnique (x) (S._isEmpty (x))

const proof = (state: Pr._State) => {
  const {useAxiom, addExistsVar, MP, QED} = state
  const zf2_1 = useAxiom (`ZF2`) ()
  const [x, pr] = addExistsVar (zf2_1) ([])

  QED ()
}

export default B.theorem (NAME, WTS, proof)