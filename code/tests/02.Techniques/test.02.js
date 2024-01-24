import { Keys     } from '../../src/helpers/helper.utils.js'
import { getProto } from '../../src/helpers/helper.utils.js'
import { setProto } from '../../src/helpers/helper.utils.js'
import { asString } from '../../src/helpers/helper.tests.js'


function Test () {

  function Enumerable (core) {
    let keys  = Keys (core)
    let proto = getProto (core)
    let mixin = {
      map    : [].map    .bind (keys),
      reduce : [].reduce .bind (keys),
      filter : [].filter .bind (keys),
      every  : [].every  .bind (keys), 
      some   : [].some   .bind (keys)
    }
    setProto (core, mixin)
    setProto (mixin, proto)
  }

  function Comparable (core) {
    let proto = getProto (core)
    let mixin = {
      equals (other) {
        let sCore  = asString (core)
        let sOther = asString (other)
        return sCore == sOther
      }
    }
    setProto (core, mixin)
    setProto (mixin, proto)
  }

  function Storable (core) {
    let proto = getProto (core)
    let clone = {...core}
    let mixin = {
      load () { Object.assign (this, clone) },
      save () { clone = {...this}           }
    }
    setProto (core, mixin)
    setProto (mixin, proto)
  }

  let CX = {x : 0}
  let CY = {y : 0}
  let CZ = {z : 0}

  Enumerable   (CX)
  Comparable   (CY)
  Storable     (CZ)

  let PX = getProto (CX)
  let PY = getProto (CY)
  let PZ = getProto (CZ)

  return [
    CX, CY, CZ,
    PX, PY, PZ
  ]
  
}

export default Test 
