import * as A from '../axioms'
import * as B from '../../basic/types'
import * as T from '../types'

bi('==', T._implies)

const proposition = x => x == x

const proof = (state: T._State) => {
  // const x = state.addVar()
  // state.proposition = proposition
  state.axioms |> console.log
}

const name = `x => x`

export default B._theorem (name) (proposition) (proof)