import B from '../../basic'
import P from '..'

bi('>>', P._implies)

const NAME = `x >> x`

const proposition = x => x >> x

const proof = ({addVar, useAxiom, MP, QED}: T._State) => {
  const x = addVar()
  const h1_1 = useAxiom (`H1`) (x, x >> x)
  const h2_1 = useAxiom (`H2`) (x, x >> x, x)
  const mp_1 = MP (h2_1, h1_1)
  const h1_2 = useAxiom (`H1`) (x, x)
  const mp_2 = MP (mp_1, h1_2)
  QED()
}

export default B._theorem (NAME) (proposition) (proof)