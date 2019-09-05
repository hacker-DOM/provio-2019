import {R} from '../common'
import requireContext from 'babel-plugin-require-context-hook/register.js'
requireContext()

const req = require.context(`.`, false, /.ts$/)
const cache = []
const importAll = req => {
  req.keys().forEach(key => cache.push(req(key)))
}
importAll(req)

export default R.reduce (R.merge) ({}) (cache)