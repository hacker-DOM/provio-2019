import {R, H, util} from 'common'
import {Proposition} from './proposition'
import {implies, not} from './helpers'

bi (`>>`, implies)
un (`!`, not)

export const

H1 = (x, y) => (
  x >> (y >> x)
),

H2 = (x, y, z) => (
  x >> (y >> z)) >> ((x >> y) >> (x >> z)
),

H3 = (x, y) => (
  (!y >> !x) >> (x >> y)
)