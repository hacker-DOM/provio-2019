import B from '../../basic'
import Pr from '../../predicates'
import S from '..'

bi('>>', P._implies)

const NAME = `There exists unique empty set`

const proposition = x => S._existsUnique (S._isEmpty (x))

const proof = (state: Pr._State) => {
  const {addVar, useAxiom, MP, QED} = state
  const x = useAxiom (`ZF2`) (state)
  /* x is an empty set */
  /* y is a contender for empty-set :D */
  const y = addVar()


  const h1_1 = useAxiom (`H1`) (x, x >> x)
  const h2_1 = useAxiom (`H2`) (x, x >> x, x)
  const mp_1 = MP (h2_1, h1_1)
  const h1_2 = useAxiom (`H1`) (x, x)
  const mp_2 = MP (mp_1, h1_2)
  QED()
}

export default B._theorem (NAME) (proposition) (proof)