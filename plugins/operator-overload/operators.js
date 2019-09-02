// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
const UNARY_OPS = [
  `++`,
  `--`,
  `-`,
  `+`,
  `~`,
  `!`,
  `delete`,
  `typeof`,
  `void`,
  `new`,
]

const BINARY_OPS = [
  // `=` doesn't seem to work
  // `=`,
  `+=`,
  `-=`,
  `*=`,
  `/=`,
  `%=`,
  `**=`,
  `<<=`,
  `>>=`,
  `>>>=`,
  `&=`,
  `^=`,
  `|=`,
  `==`,
  `!=`,
  `===`,
  `!==`,
  `>`,
  `>=`,
  `<`,
  `<=`,
  `%`,
  `**`,
  `&`,
  `|`,
  `^`,
  `<<`,
  `>>`,
  `>>>`,
  `&&`,
  `||`,
  `in`,
  `instanceof`,
  `,`,
  `.`,
]

const UNARY = UNARY_OPS.reduce((acc, cur, i) => {
  acc[cur] = `un${i}`
  return acc
}, {})

const BINARY = BINARY_OPS.reduce((acc, cur, i) => {
  acc[cur] = `bi${i}`
  return acc
}, {})

module.exports = {
  UNARY,
  BINARY
}