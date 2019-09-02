import {R,S,util} from '../../common'
import * as T from '../types'
// import * as H from '../helpers'

const x = T._var
const y = T._var
const z = T._var

/* eslint-disable indent*/
// ZF1: Axiom of extensionality
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

// ZF2: Null set axiom
const ZF2 = 
T._exists (x)
  (T._forAll (y)
    (T._not
      (T._in (x) (y))
    )
  )

ZF1 |> console.log
ZF2 |> console.log

// There exists a unique set having no elements
// const S1 =
// H._existsUnique (x)
//   (H._isEmpty (x))

// const P1 = 
// T._implies
//   (ZF2)
//   ()
  
// const T1 = T._theorem (S1) (P1)