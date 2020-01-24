import theorems from '../theorems'
import ModusPonens from './modus-ponens'

export default (x, y) => {
  const

  c_1 = () => theorems.conjunction.introduction (x, y),
  mp_1 = () => ModusPonens ({implication: c_1, proposition: x}),
  mp_2 = ModusPonens ({implication: mp_1, proposition: () => y})
  return mp_2
}