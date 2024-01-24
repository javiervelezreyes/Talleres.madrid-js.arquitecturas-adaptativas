import { Extend } from '../../src/helpers/helper.utils.js'


function Test () {

  function Iterable (core) {
    Extend (core, {
      *[Symbol.iterator] () {
        for (let key in this) {
          let value = this[key]
          yield [key, value]
        }
      }
    })
  }

  let CX = {x : 0}
  let CY = {y : 0}

  Iterable (CX)
  Iterable (CY)

  let RX = [...CX]
  let RY = [...CY]

  return [RX, RY]
  
}

export default Test 
