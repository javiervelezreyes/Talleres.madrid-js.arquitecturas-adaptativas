import { Keys     } from '../../src/helpers/helper.utils.js'
import { getProto } from '../../src/helpers/helper.utils.js'
import { setProto } from '../../src/helpers/helper.utils.js'
import { asString } from '../../src/helpers/helper.tests.js'


function Test () {

  function Mixin (Ext) {
    return function (core) {
      let proto = getProto (core)
      setProto (core, Ext)
      setProto (Ext, proto)
    }
  }

  function Enumerable (core) {
    let keys = Keys (core)
    return Mixin ({
      map    : [].map    .bind (keys),
      reduce : [].reduce .bind (keys),
      filter : [].filter .bind (keys),
      every  : [].every  .bind (keys), 
      some   : [].some   .bind (keys)
    })(core)
  } 

  function Comparable (core) {
    return Mixin ({
      equals (other) {
        let sCore  = asString (core)
        let sOther = asString (other)
        return sCore == sOther
      }
    })(core)
  } 

  function Storable (core) {
    let clone = {...core}
    return Mixin ({
      load () { Object.assign (this, clone) },
      save () { clone = {...this}           }
    })(core)
  } 

  let CX = {x : 0}
  let CY = {y : 0}
  let CZ = {z : 0}

  Enumerable (CX)
  Comparable (CY)
  Storable   (CZ)

  let PX = getProto (CX)
  let PY = getProto (CY)
  let PZ = getProto (CZ)

  return [
    CX, CY, CZ, 
    PX, PY, PZ
  ]

}

export default Test 
