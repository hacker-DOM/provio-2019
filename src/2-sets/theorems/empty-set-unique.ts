import H from 'common'
import {ZF2} from '../axioms'
import {Theorem, implies, inferences} from 'predicates'
import {existsUnique, isUnique, isEmpty} from '../helpers'

bi (`>>`, implies)

const

NAME = `Empty Set Uniqueness`,

WTS = existsUnique (isEmpty),

proof = () => {
  const

  zf2 = ZF2 (),
  // zf2 = exists (isEmpty)
  // zf2 = !(x => !isEmpty (x))
  // TODO: Prove next line
  _isUnique = isUnique (isEmpty),
  c_1 = inferences.conjunction.introduction (zf2, _isUnique)
  return c_1
},

theorem = new Theorem (NAME, WTS, proof)
H.test (theorem)
export default WTS
