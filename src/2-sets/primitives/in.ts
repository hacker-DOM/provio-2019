export class In {
  /* eslint-disable-next-line */
  constructor (public left, public right) {}
}

export const _in = (x, y) => new In (x, y)