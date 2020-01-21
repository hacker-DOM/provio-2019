import {Proposition} from './proposition'

type Proof = () => (x: Proposition) => Proposition

export class Theorem {
  constructor (
    public name: string,
    public WTS: (x: Proposition) => Proposition,
    public proof: Proof,
  ) {}
}
