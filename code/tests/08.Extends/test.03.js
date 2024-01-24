import Extends from './code/extensions/extends.js'
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

  @Extends (Storable)
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
  
  return [CX, CY]
  
}

export default Test 
