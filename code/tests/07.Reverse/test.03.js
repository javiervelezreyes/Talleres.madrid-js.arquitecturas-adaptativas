import Inspect from './code/inspect.js'
import Subject from './code/extensions/extension.subject.js'


function Test () {

  @Subject
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

  Inspect (CX).install   (Storable)
  Inspect (CY).install   (Storable)
  Inspect (CX).uninstall (Storable)
  Inspect (CY).uninstall (Storable)

  

  return [CX, CY]
  
}

export default Test 
