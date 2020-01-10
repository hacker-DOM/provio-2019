// This is meant to compile away *just* the syntax that TypeScript can't handle.

module.exports = {
  // return {
    // "presets": [
    //   [
    //     "@babel/preset-env",
    //     {
    //       "targets": {
    //         "node": "current",
    //         "esmodules": true,
    //       },
    //       "modules": false,
    //     }
    //   ],
    // ],
    "plugins": [
      // Our plugins
      // "./plugins/operator-overload",
      // Plugin by others
      // "require-context-hook",
      // ["module-resolver", {
      //   "alias": {
      //     "common": "./src/0-common",
      //     "basic": "./src/1-basic",
      //     "propositions": "./src/2-propositions",
      //     "predicates": "./src/3-predicates",
      //     "sets": "./src/4-sets",
      //   },
      // }],
      // "macros"
      // Plugins by @babel
      // "@babel/proposal-object-rest-spread",
      ["@babel/plugin-proposal-pipeline-operator", {
        "proposal": "smart"
      }],
      // "@babel/plugin-transform-runtime",
      // "@babel/plugin-proposal-class-properties",
      // "@babel/plugin-proposal-private-methods",
      // "@babel/plugin-proposal-optional-chaining",
      // "@babel/plugin-proposal-do-expressions",
      "@babel/plugin-syntax-typescript",
      // We are *not* using babel-plugin-transform-typescript,
      // because we want the type annotations to stick around for use by TS.
    ],
    // "sourceMaps": "inline",
    // "retainLines": true,
  // },
}
