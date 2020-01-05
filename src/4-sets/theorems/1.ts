import B from 'basic'
import Pr from 'propositions'
import S from '..'

bi (`>>`, Pr._implies)

const NAME = `There exists unique empty set`

const proposition = x => S._existsUnique (x) (S._isEmpty (x))

const proof = (state: Pr._State) => {
  const {useAxiom, addExistsVar, MP, QED} = state
  const zf2_1 = useAxiom (`ZF2`) ()
  const [x, pr] = addExistsVar (zf2_1) ([])

  QED ()
}

export default B._theorem (NAME) (proposition) (proof)