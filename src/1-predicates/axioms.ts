import {implies, not, and} from './helpers'

bi (`>>`, implies)
un (`!`, not)
bi (`&`, and)

export class H1 {
  constructor (a, b) {
    this.a = a
    this.b = b
  }

  static evalAny = (x, y) => (
    x >> (y >> x)
  )

  eval () {
    return H1.evalAny (this.a, this.b)
  }
}

export class H2 {
  constructor (a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  static evalAny = (x, y, z) => (
    (x >> (y >> z)) >> ((x >> y) >> (x >> z))
  )

  eval () {
    return H2.evalAny (this.a, this.b, this.c)
  }
}

export class H3 {
  constructor (a, b) {
    this.a = a
    this.b = b
  }

  static evalAny = (x, y) => (
    (!y >> !x) >> (x >> y)
  )

  eval () {
    return H3.evalAny (this.a, this.b)
  }
}