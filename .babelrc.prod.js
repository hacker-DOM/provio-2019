const ts = require ('./.babelrc.dev.js/index.js.js.js')
const R = require ('ramda')

module.exports = R.mergeDeepWith (R.concat) (ts) ({
  "plugins": [
    "@babel/plugin-transform-typescript"
  ],
})