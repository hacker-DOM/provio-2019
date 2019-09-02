// Language of predicate logic consists of:
// 1. a set of *constant symbols*
// 2. a set of *functional symbols*, each with a specified arity
// 3. a set of *relational symbols*, each with a specified arity
// 4. an unlimited set of *variables*
// 5. the propositional connectives $\lnot, \land, \lor, \implies, \equiv$
// 6. the quantifiers $\forall$ and $\exists$
// 7. parens

export class _Nand {
  constructor(x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _nand = x => y => new _Nand(x, y)

// export class _Not {
//   constructor(x: _Set): void {
//     this.x = x
//   }
}

// export const _not = x => new _Not(x)
export const _not = x => _nand(x, x)

// export class _Implies {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
// }

// export const _implies = x => y => new _Implies(x, y)
export const _implies = x => y => _nand(x, _nand(x, y))

export const _and = x => y => _nand(_nand(x, y), _nand(x, y))

export const _or = x => y => _not(_and(_not(x), _not(y)))

export class _In {
  constructor(x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _in = x => y => new _In(x, y)

export class _ForAll {
  constructor(x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _forAll = x => y => new _ForAll(x, y)

export class _Exists {
  constructor(x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _exists = x => y => new _Exists(x, y)

export class _Equals {
  constructor(x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _equals = x => y => new _Equals(x, y)

export class _Equiv {
  constructor(x: _Set, y: _Set): void {
    this.x = x
    this.y = y
  }
}

export const _equiv = x => y => new _Equiv(x, y)

export class _Theorem {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

export const _theorem = x => y => new _Theorem(x, y)