export class _Set {
}

export const _set = () => new _Set()

// export class _Operation {
// }

// export const _operation = () => new _Operation()

export class _Nand {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _nand = x => y => new _Nand(x, y)

export class _Not {
  constructor (x: _Set): void {
    this.x = x
  }
}

export const _not = x => new _Not(x)

export class _In {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _in = x => y => new _In(x, y)

export class _ForAll {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _forAll = x => y => new _ForAll(x, y)

export class _Exists {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _exists = x => y => new _Exists(x, y)

export class _Equals {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _equals = x => y => new _Equals(x, y)

export class _Equiv {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _equiv = x => y => new _Equiv(x, y)

// Variable
export class _Var {
  constructor (x: _Set): void {
    this.x = x
  }
}

export const _var = x => new _Var(x)
