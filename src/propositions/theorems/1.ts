import * as A from '../axioms'
import * as B from '../../basic/types'
import * as T from '../types'

bi('==', T._implies)

const proposition = x => x == x

const proof = (state: T._State) => {
  const x = state.addVar()
  const h1_1 = state.useAxiom (`H1`) (x, x == x)
  const h2_2 = state.useAxiom (`H2`) (x, x == x, x)
  const mp_1 = state.useInference (`MP`) (h2, h1)
  const h1_2 = state.useAxiom (`H1`) (x ,x)
  const mp_2 = state.useInference (`MP`) (mp_1, h1_2)
  state.setProposition(mp_2)
  // state.axioms |> console.log
}

const name = `x => x`

export default B._theorem (name) (proposition) (proof)