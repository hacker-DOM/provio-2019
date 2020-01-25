export class In {
  constructor (left, right) {
    this.left = left
    this.right = right
  }
}

export const _in = (x, y) => new In (x, y)