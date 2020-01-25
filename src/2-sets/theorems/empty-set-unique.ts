import H from 'common'
import {ZF2} from '../axioms'
import {Theorem, implies, inferences} from 'predicates'
import {existsUnique, isUnique, isEmpty} from '../helpers'

bi (`>>`, implies)

const

NAME = `Empty Set Uniqueness`,

WTS = existsUnique (isEmpty),

lemma = () => {
  // const x = set()
  // const y = set()
  // const t_1 = (z => !(z in x)) & (z => !(z in y))
  // const p_1 = conjunction.elimination (t_1)
  // const p_2 = conjunction.elimination2 (t_1)
  // const z = set()
  // const p_1_1 = universal.instantiation (z, p_1)
  // or just
  // const p_1_1 = p_1 (z)
  // const p_2_1 = p_2 (z)
  // const p_1_2 = tautology (p2_1_1, z in y)
  // const p_2_2 = tautology (p2_2_1, z in x)
  // const p_2 = conjunction.introduction (p_1_2, p_2_2)
  // const p_3 = biconditional.introduction (p_2)
  // const p_4 = universal.generalization (z, p_3)
  // const p_5 = equals.elimination (p_4)
  // const p_6 = universal.generalization (x, p_5)
  // const p_7 = universal.generalization (y, p_6)
  // ...
  return isUnique (isEmpty)
},

proof = () => {
  const

  zf2 = ZF2 (),
  // zf2 = exists (isEmpty)
  // zf2 = !(x => !isEmpty (x))
  isUnique = lemma (),
  c_1 = inferences.conjunction.introduction (zf2, isUnique)
  return c_1
},

theorem = new Theorem (NAME, WTS, proof)
H.test (theorem)
export default WTS
