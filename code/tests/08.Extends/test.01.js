import Extends   from './code/extensions/extends.js'
import Trait     from './code/extensions/extension.trait.js'
import { Keys  } from '../../src/helpers/helper.utils.js'


function Test () {

  @Trait
  class Enumerable {
    constructor (core) {
      this.keys = Keys (core)
    }
    map    (...xs) { return [].map    .bind (this.keys)(...xs) }
    reduce (...xs) { return [].reduce .bind (this.keys)(...xs) }
    filter (...xs) { return [].filter .bind (this.keys)(...xs) }
    every  (...xs) { return [].every  .bind (this.keys)(...xs) }
    some   (...xs) { return [].some   .bind (this.keys)(...xs) }
  }

  @Extends (Enumerable)
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
