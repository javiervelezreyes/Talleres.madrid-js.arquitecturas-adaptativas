import Inspect      from './code/inspect.js'
import Mixin        from './code/extensions/extension.mixin.js'
import { getProto } from '../../src/helpers/helper.utils.js'
import { asString } from '../../src/helpers/helper.tests.js'


function Test () {

  @Mixin
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

  Inspect (CX).install   (Comparable)
  Inspect (CY).install   (Comparable)
  Inspect (CX).uninstall (Comparable)
  Inspect (CY).uninstall (Comparable)

  let PX = getProto (CX)
  let PY = getProto (CY)

  return [CX, CY, PX, PY]

}

export default Test 
