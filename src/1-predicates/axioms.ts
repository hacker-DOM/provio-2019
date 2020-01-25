import {implies, not, and} from './helpers'

bi (`>>`, implies)
un (`!`, not)
bi (`&`, and)

export const

H1 = (x, y) => (
  x >> (y >> x)
),

H2 = (x, y, z) => (
  (x >> (y >> z)) >> ((x >> y) >> (x >> z))
),

H3 = (x, y) => (
  (!y >> !x) >> (x >> y)
)