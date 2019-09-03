import * as A from '../axioms'
import * as B from '../../basic/types'
import * as T from '../types'

bi('==', T._implies)

const proposition = x => x == x

const proof = (state: B._State) => {
  state.addAxiom(proposition)
  const x = state.addVar()
  state.proposition = proposition
}

export default {
  proposition,
  proof
}