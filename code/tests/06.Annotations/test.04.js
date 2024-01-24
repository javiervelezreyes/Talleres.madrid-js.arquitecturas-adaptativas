import Inspect from './code/inspect.js'
import Aspect  from './code/extensions/extension.aspect.js'


function Test () {

  @Aspect
  class Lockable {
    constructor (core) {}
    provided () {
      return this.open
    }
  }

  function fx (x) { return x + 1 }
  function fy (x) { return x - 1 }
  
  let CX = { fx, fy }
  let CY = { fx, fy }
  
  Inspect (CX).install (Lockable)
  Inspect (CY).install (Lockable)

  CX.open = true
  CY.open = false

  let RX = [CX.fx (1),  CX.fx (1)]
  let RY = [CY.fy (1),  CY.fy (1)]

  return [
    CX, CY,
    RX, RY 
  ]

}

export default Test 
