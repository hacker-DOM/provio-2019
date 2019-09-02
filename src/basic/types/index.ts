// Variable
export class _Var {
}

export const _var = () => new _Var()

export class _Theorem {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

export const _theorem = x => y => new _Theorem(x, y)