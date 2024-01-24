import Extends from './code/extensions/extends.js'
import Aspect  from './code/extensions/extension.aspect.js'


function Test () {

  @Aspect
  class Lockable {
    constructor (core) {}
    provided () {
      return this.open
    }
  }

  @Extends (Lockable)
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
  
  CX.open = true
  CY.open = false

  let RX = [CX.fx (),  CX.fx ()]
  let RY = [CY.fy (),  CY.fy ()]

  return [
    CX, CY,
    RX, RY 
  ]

}

export default Test 
