import Inspect      from './code/inspect.js'
import { asString } from '../../src/helpers/helper.tests.js'


function Test () {

  class Comparable {
    constructor (core) {
      this.core = core
    }
    equals (other) {
      let core   = this.core 
      let sCore  = asString (core)
      let sOther = asString (other)
      return sCore == sOther
    }
  } 

  let CX = { x : 0 }
  let CY = { y : 0 }

  Inspect (CX).Mixin (Comparable)
  Inspect (CY).Mixin (Comparable)

  let RX = [ CX.equals (CX), CX.equals (CY) ]
  let RY = [ CY.equals (CX), CY.equals (CY) ]

  return [CX, CY, RX, RY]

}

export default Test 
