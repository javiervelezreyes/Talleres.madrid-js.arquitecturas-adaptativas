import Inspect from './code/inspect.js'
import Point   from './code/point.js'


function Test () {

  class Storable {
    constructor (core) {
      this.core  = core
      this.clone = {...core}
    }
    load () { 
      let core  = this.core
      let clone = this.clone
      Object.assign (core, clone) 
    }
    save () { 
      let core   = this.core
      this.clone = {...core}
    }
  }       

  let CX = { x : 0 }
  let CY = { y : 0 }

  Inspect (CX).Subject (Storable)
  Inspect (CY).Subject (Storable)

  let Store = Point (Storable)

  Store (CX).save ()
  Store (CY).save ()

  let RX = [{ ...CX }]
  let RY = [{ ...CY }]

  CX.x++
  CY.y++

  RX.push ({ ...CX })
  RY.push ({ ...CY })

  Store (CX).load ()
  Store (CY).load ()

  RX.push ({ ...CX })
  RY.push ({ ...CY })

  return [CX, CY, RX, RY]
  
}

export default Test 
