// const ts = require ('./.babelrc.dev.js')
// const R = require ('ramda')

module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": 13
      },
    }],
  ],
  "plugins": [
    "./plugins/operator-overload",
    ["module-resolver", {
      "alias": {
        "common": "./src/0-common",
        "basic": "./src/1-basic",
        "propositions": "./src/2-propositions",
        "predicates": "./src/3-predicates",
        "sets": "./src/4-sets",
      },
    }],
    "require-context-hook",
    "@babel/plugin-transform-typescript",
    ["@babel/plugin-proposal-pipeline-operator", {
      "proposal": "smart"
    }],
  ],
  // "retainLines": true,
}