import Extends      from './code/extensions/extends.js'
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

  @Extends (Comparable)
  class Core {
    constructor () {
      this.x = 0
      this.y = 0
    }
    fx () { return this.x++ }
    fy () { return this.y++ }
  }

  let CX = new Core ()
  let CY = new Core ()
  let PX = getProto (CX)
  let PY = getProto (CY)
  
  return [CX, CY, PX, PY]

}

export default Test 
