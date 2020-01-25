/* Owner: dom */
const R = require (`ramda`)
const argv = require (`yargs`).argv
const glob = require (`glob`)
const StackUtils = require (`stack-utils`)

const stack = new StackUtils ({
  cwd: process.cwd (),
  internals: StackUtils.nodeInternals (),
  ignoredPackages: [`ramda`]
})

const test = (er, files) => {
  try {
    R.map (f => require (`../${f}`)) (files)
  } catch (e) {
    console.error (`
    Message:
    ${e.message}
    
    Stack:
    ${stack.clean (e.stack)}
  `)
  }
}

glob (`build/**/theorems/*.spec.js`, test)

if (argv.all) {
  glob (`build/**/*.spec.js`, test)
}