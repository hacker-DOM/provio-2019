/* eslint-disable max-lines */
import {R} from 'common'

export class BasicProposition {}

export type Proposition =
  (...propositions: Proposition[]) => Proposition
  | BasicProposition
