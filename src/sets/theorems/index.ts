import {R,S,util} from '../../common'
import * as T from '../types'

// class _Theorem {
// }

// const _theorem = new _Theorem()

const x = T._var
const y = T._var
const z = T._var

/* eslint-disable indent*/
// ZF1
const ZF1 = 
T._forAll (x)
  (T._forAll (y)
    (T._equiv
      (T._equals (x) (y))
      (T._forAll (z)
        (T._equiv 
          (T._in (z) (x))
          (T._in (z) (y))
        )
      )
    )
  )

// ZF2
const ZF2 = 
T._exists (x)
  (T._forAll (y)
    (T._not
      (T._in (x) (y))
    )
  )

ZF1 |> console.log
ZF2 |> console.log