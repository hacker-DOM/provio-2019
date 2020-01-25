import {implies, not, and} from './helpers'

bi (`>>`, implies)
un (`!`, not)
bi (`&`, and)

export class H1_ {
  constructor (left, right) {
    this.left = left
    this.right = right
  }

  static evalAny = (x, y) => (
    x >> (y >> x)
  )

  eval () {
    return H1_.evalAny (this.left, this.right)
  }
  //   (left = this.left, right = this.right) {
  //   const {left, right} = this
  //   return left >> (right >> left)
  // }
}

export const H1 = (x, y) => (
  x >> (y >> x)
)

export const H2 = (x, y, z) => (
  (x >> (y >> z)) >> ((x >> y) >> (x >> z))
),

H3 = (x, y) => (
  (!y >> !x) >> (x >> y)
)