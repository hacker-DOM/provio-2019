import {H} from 'common'
import {ZF2} from '../axioms'
import {Theorem, implies, theorems, inferences} from 'predicates'
import {existsUnique, isUnique, isEmpty} from '../helpers'

bi (`>>`, implies)

const

NAME = `Empty Set Uniqueness`,

WTS = existsUnique (isEmpty),

proof = () => {
  const

  zf2 = ZF2 (),
  // TODO: Prove next line
  _isUnique = isUnique (isEmpty),
  c_1 = () => theorems.conjunction.introduction (zf2, _isUnique),
  mp_1 = inferences.ModusPonens ({implication: c_1, proposition: zf2}),
  mp_2 = inferences.ModusPonens ({implication: mp_1, proposition: () => _isUnique})
  return mp_2
},

theorem = new Theorem (NAME, WTS, proof)
H.test (theorem)
export default WTS
