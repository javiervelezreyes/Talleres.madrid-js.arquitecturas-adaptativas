import { Keys     } from '../../src/helpers/helper.utils.js'
import { asString } from '../../src/helpers/helper.tests.js'


const POINTS = Symbol.for ('Extensions')

function Test () {

  function Subject (key, Ext) {
    return function (core) {
      core[POINTS]      = core[POINTS] || {}
      core[POINTS][key] = Ext
    }
  }

  function Point (key) {
    return function (core) {
      let subject = core[POINTS][key]
      return subject
    }
  }

  const ENUMERABLE   = 'Enumerable'
  const COMPARABLE   = 'Comparable'
  const STORABLE     = 'Storable'

  function Enumerable (core) {
    let keys = Keys (core)
    return Subject (ENUMERABLE, {
      map    : [].map    .bind (keys),
      reduce : [].reduce .bind (keys),
      filter : [].filter .bind (keys),
      every  : [].every  .bind (keys), 
      some   : [].some   .bind (keys)
    })(core)
  } 

  function Comparable (core) {
    return Subject (COMPARABLE, {
      equals (other) {
        let sCore  = asString (core)
        let sOther = asString (other)
        return sCore == sOther
      }
    })(core)
  } 

  function Storable (core) {
    let clone = {...core}
    return Subject (STORABLE, {
      load () { Object.assign (core, clone) },
      save () { clone = {...core}           }
    })(core)
  } 

  let asEnumerable = Point (ENUMERABLE)
  let asComparable = Point (COMPARABLE)
  let asStorable   = Point (STORABLE)

  let CX = {x : 0}
  let CY = {x : 0}
  let CZ = {x : 0}

  Enumerable (CX)
  Comparable (CY)
  Storable   (CZ)

  let PX = asEnumerable (CX)
  let PY = asComparable (CY)
  let PZ = asStorable   (CZ)

  return [
    CX, CY, CZ,
    PX, PY, PZ
  ]

}

export default Test 
