import {H} from 'common'
import {ZF2} from '../axioms'
import {Theorem, implies, theorems, MP} from 'predicates'
import {existsUnique, isUnique, isEmpty} from '../helpers'

bi (`>>`, implies)

const

NAME = `Empty Set Uniqueness`,

WTS = existsUnique (isEmpty),

proof = () => {
  const

  zf2 = ZF2 (),
  // zf2 = ZF2,
  // prove
  _isUnique = isUnique (isEmpty),
  c_1 = () => theorems.conjunction.introduction (zf2, _isUnique),
  // c_1 = () => theorems.conjunction.introduction (zf2, _isUnique),
  // c_1 = (x, y) => theorems.conjunction.introduction (zf2 (x, y), _isUnique),
  mp_1 = MP ({implication: c_1, proposition: zf2}),
  // console.log (`mp_1.toString()`, mp_1.left.toString())
  // console.log (`_isUnique`, _isUnique.toString())
  mp_2 = MP ({implication: mp_1, proposition: () => _isUnique})
  return mp_2
},

theorem = new Theorem (NAME, WTS, proof)
H.test (theorem)
export default WTS
