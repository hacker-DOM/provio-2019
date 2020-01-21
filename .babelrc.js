const R = require (`ramda`)

const js = !process.env.BABEL_FOR_TYPESCRIPT

console.log (`For js: ${js}.`)

module.exports = {
  "presets": [
    ... js
      ? [["@babel/preset-env", {
        "targets": {
          "node": 13
        },
      }]]
      : [],
  ],
  "plugins": [
    // Our plugins
    "./plugins/operator-overload",
    // Plugin by others
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
    // Plugins by @babel
    ["@babel/plugin-proposal-pipeline-operator", {
      "proposal": "smart"
    }],
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-do-expressions",
    ... js
      ? ["@babel/plugin-transform-typescript"]
      // We are *not* using babel-plugin-transform-typescript,
      // because we want the type annotations to stick around for use by TS.
      : ["@babel/plugin-syntax-typescript"],
  ],
  "retainLines": true,
  "sourceMaps": true,
}

