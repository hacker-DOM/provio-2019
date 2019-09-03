export class _Set {
}

export const _set = () => new _Set()

// export class _Operation {
// }

// export const _operation = () => new _Operation()

export class _In {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _in = x => y => new _In(x, y)

export class _Equals {
  constructor (x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _equals = x => y => new _Equals(x, y)