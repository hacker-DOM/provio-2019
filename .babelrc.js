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
        "predicates": "./src/1-predicates",
        "sets": "./src/2-sets",
      },
    }],
    "require-context-hook",
    // Plugins by @babel
    ["@babel/plugin-proposal-pipeline-operator", {
      "proposal": "smart"
    }],
    "@babel/plugin-proposal-do-expressions",
    "@babel/plugin-proposal-export-default-from",
    ... js
      ? ["@babel/plugin-transform-typescript"]
      // We are *not* using babel-plugin-transform-typescript,
      // because we want the type annotations to stick around for use by TS.
      : ["@babel/plugin-syntax-typescript"],
  ],
  "retainLines": true,
  "sourceMaps": true,
}

