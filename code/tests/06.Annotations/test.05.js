import Inspect from './code/inspect.js'
import Forward from './code/extensions/extension.forward.js'


function Test () {

  const N = 2

  @Forward
  class Accountable {
    constructor (core) {
      this.core    = core
      this.tickets = N
    }
    hook (args, key) {
      if (this.tickets) {
        this.tickets--
        return this.core[key](...args)
      }
    }
  } 

  function fx (x) { return x + 1 }
  function fy (x) { return x - 1 }
  
  let CX = { fx, fy }
  let CY = { fx, fy }
  
  let PX = Inspect (CX).install (Accountable)
  let PY = Inspect (CY).install (Accountable)

  let RX = [PX.fx (1),  PX.fx (2), PX.fx (3)]
  let RY = [PY.fy (1),  PY.fy (2), PY.fy (3)]

  return [
    CX, CY,
    PX, PY,
    RX, RY 
  ]

}

export default Test 
