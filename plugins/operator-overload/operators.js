// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
const UNARY_EXPRESSION = [
  `void`,
  `throw`,
  `delete`,
  `!`,
  `+`,
  `-`,
  `~`,
  `typeof`,
]

const UPDATE_EXPRESSION = [
  `++`,
  `--`,
]

const BINARY_EXPRESSION = [
  `+`,
  `-`,
  `/`,
  `%`,
  `*`,
  `**`,
  `&`,
  `|`,
  `>>`,
  `>>>`,
  `<<`,
  `^`,
  `==`,
  `===`,
  `!=`,
  `!==`,
  `in`,
  `instanceof`,
  `>`,
  `<`,
  `>=`,
  `<=`,
]

const LOGICAL_EXPRESSION = [
  `||`,
  `&&`,
  `??`,
]

const UNARY = UNARY_EXPRESSION.reduce((acc, cur, i) => {
  acc[cur] = `un${i}`
  return acc
}, {})

const UPDATE = UPDATE_EXPRESSION.reduce((acc, cur, i) => {
  acc[cur] = `up${i}`
  return acc
}, {})

const BINARY = BINARY_EXPRESSION.reduce((acc, cur, i) => {
  acc[cur] = `bi${i}`
  return acc
}, {})

const LOGICAL = LOGICAL_EXPRESSION.reduce((acc, cur, i) => {
  acc[cur] = `log${i}`
  return acc
}, {})

module.exports = {
  UNARY,
  UPDATE,
  BINARY,
  LOGICAL,
}