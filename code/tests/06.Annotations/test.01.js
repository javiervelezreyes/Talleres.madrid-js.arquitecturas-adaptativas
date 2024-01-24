import Inspect   from './code/inspect.js'
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

  let CX = { x : 0 }
  let CY = { y : 0 }
  
  Inspect (CX).install (Enumerable)
  Inspect (CY).install (Enumerable)

  let RX = CX.map (function (k) { return k })
  let RY = CY.map (function (k) { return k })

  return [CX, CY, RX, RY]

}

export default Test 
