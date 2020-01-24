const R = require (`ramda`)
const glob = require (`glob`)
const StackUtils = require (`stack-utils`)

const stack = new StackUtils ({
  cwd: process.cwd (),
  internals: StackUtils.nodeInternals (),
  ignoredPackages: [`ramda`]
})

glob (`build/**/theorems/*.js`, (er, files) => {
  try {
    R.map (f => require (`../${f}`)) (files)
  } catch (e) {
    console.error (`
      Message:
      ${e.message}

      Stack:
      ${stack.clean (e.stack, 5)}
    `)
  }
})