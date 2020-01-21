export class In {
  constructor (public left, public right) {}
}

export const _in = (x, y) => new In (x, y)