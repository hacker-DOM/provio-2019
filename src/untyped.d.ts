/* eslint-disable quotes */
declare module 'babel-plugin-require-context-hook/register.js' {
  const register: () => void
  export = register
}
/* eslint-enable quotes */

/* eslint-disable no-var */
declare var un: (operator: string, func: Function) => void

declare var bi: (operator: string, func: Function) => void
/* eslint-enable no-var */