import * as BH from './helpers'
import {R,util} from '../common'

// Variable
export class _Var {
}

export const _var = () => new _Var()

export class _Theorem {
  constructor (name, proposition, proof) {
    this.name = name
    this.proposition = proposition
    this.proof = proof
  }
}

export const _theorem = name => proposition => proof => new _Theorem(name, proposition, proof)

export class _State {
  #vars = []

  get vars() {
    return this.#vars
  }

  addVar() {
    // return R.append (el) (this.#vars)
    const x = _var()
    x.id = this.#vars.length
    this.#vars.push(x)
    return x
  }

  #predicates = {}

  predicates(args) {
    const s = BH.serialize(args)
    return this.#predicates[s]
  }

  // add predicate
  addPr(args, pr) {
    const s = BH.serialize(args)
    const prs = this.#predicates
    s in prs ? prs[s].push(pr) : prs[s] = [pr]
  }

  // logPredicates(args) {
  //   return R.map (R.toString) (this.predicates (args))
  // }

  toString() {
    const vars= `${util.inspect(this.#vars)}`
    const prs = R.map (R.map (R.toString)) (this.#predicates)
    return vars + util.inspect(prs)
  }

  log() {
    console.log(this.toString())
  }

  #axioms = []

  addAxiom(axiom) {
    this.#axioms.push (axiom)
  }

  #inferences = []

  addInference(inf) {
    this.#inferences.push (inf)
  }

  statement 
}

export const _state = () => new _State()
