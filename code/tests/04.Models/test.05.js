import { Methods } from '../../src/helpers/helper.utils.js'
import { Min     } from '../../src/helpers/helper.tests.js'
import { Max     } from '../../src/helpers/helper.tests.js'


function Test () {

  const MIN = 1
  const MAX = 5
  const N   = 2

  function Forward (Ext) {
    return function (core) {
      let proxy = {}
      let keys  = Methods (core)
      for (let key of keys) {
        proxy[key] = function (...args) {
          return Ext (args, key)
        }
      }
      return proxy
    }
  }

  function Bondable (core) {
    return Forward (
      function (args, key) {
        let fn  = core[key]
        let out = fn (...args)
        return Max (Min (out, MAX), MIN)
      }
    )(core)
  } 

  function Accountable (core) {
    let tickets = N
    return Forward (
      function (args, key) {
        if (tickets) {
          tickets--
          return core[key](...args)
        }
      }
    )(core)
  } 

  function fx (x) { return x + 1 }
  function fy (x) { return x - 1 }
  
  let CX = { fx, fy }
  let CY = { fx, fy }

  let PX = Bondable    (CX)
  let PY = Accountable (CY)

  let RX = [PX.fx (0), PX.fx (3), PX.fx (6)]
  let RY = [PY.fx (3), PY.fx (3), PY.fx (3)]

  return [
    CX, CY, 
    PX, PY,
    RX, RY
  ]

}

export default Test 
