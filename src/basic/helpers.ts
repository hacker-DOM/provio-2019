import {R} from '../common'

// args
export const serialize = R.pipe (
  R.sortBy (R.prop (`id`)),
  R.map (v => v.id.toString()),
  R.join (`,`)
)