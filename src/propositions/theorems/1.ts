import * as A from '../axioms'
import * as B from '../../basic/types'
import * as T from '../types'

bi('==', T._implies)

const NAME = `x => x`

const proposition = x => x == x

// const f = expr => x => expr

const proof = (state: T._State) => {
  const h1_1 = state.useAxiom (`H1`) (x => x, x => x == x)
  const h2_1 = state.useAxiom (`H2`) (x => x, x => x == x, x => x)
  const mp_1 = state.useInference (`MP`) (h2_1, h1_1)
  const h1_2 = state.useAxiom (`H1`) (x => x, x => x)
  const mp_2 = state.useInference (`MP`) (mp_1, h1_2)
  mp_2 |> console.log(`mp_2`, #)
  state.generals() |> console.log(`state.generals`, #)
  
  state.setProposition(mp_2)
  state.proposition() |> console.log(`hi`, #)
}


export default B._theorem (NAME) (proposition) (proof)