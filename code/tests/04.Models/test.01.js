import { Extend   } from '../../src/helpers/helper.utils.js'
import { Keys     } from '../../src/helpers/helper.utils.js'
import { asString } from '../../src/helpers/helper.tests.js'


function Test () {

  function Trait (Ext) {
    return function (core) {
      return Extend (core, Ext)
    }
  }

  function Enumerable (core) {
    let keys = Keys (core)
    return Trait ({
      map    : [].map    .bind (keys),
      reduce : [].reduce .bind (keys),
      filter : [].filter .bind (keys),
      every  : [].every  .bind (keys), 
      some   : [].some   .bind (keys)
    })(core)
  } 

  function Comparable (core) {
    return Trait ({
      equals (other) {
        let sCore  = asString (core)
        let sOther = asString (other)
        return sCore == sOther
      }
    })(core)
  } 

  function Storable (core) {
    let clone = {...core}
    return Trait ({
      load () { Object.assign (this, clone) },
      save () { clone = {...this}           }
    })(core)
  } 

  let CX = {x : 0}
  let CY = {y : 0}
  let CZ = {z : 0}

  Enumerable   (CX)
  Comparable   (CY)
  Storable     (CZ)

  return [CX, CY, CZ]

}

export default Test 
