import { Extend   } from '../../src/helpers/helper.utils.js'
import { Keys     } from '../../src/helpers/helper.utils.js'
import { asString } from '../../src/helpers/helper.tests.js'


function Test () {
  
  function Enumerable (core) {
    let keys = Keys (core)
    Extend (core, {
      map    : [].map    .bind (keys),
      reduce : [].reduce .bind (keys),
      filter : [].filter .bind (keys),
      every  : [].every  .bind (keys), 
      some   : [].some   .bind (keys)
    })
  }

  function Comparable (core) {
    Extend (core, {
      equals (other) {
        let sCore  = asString (core)
        let sOther = asString (other)
        return sCore == sOther
      }
    })
  }

  function Storable (core) {
    let clone = {...core}
    Extend (core, {
      load () { Object.assign (this, clone) },
      save () { clone = {...this}           }
    })
  }

  let CX = {x : 0}
  let CY = {y : 0}
  let CZ = {z : 0}

  Enumerable (CX)
  Comparable (CY)
  Storable   (CZ)

  return [CX, CY, CZ]

}

export default Test 
