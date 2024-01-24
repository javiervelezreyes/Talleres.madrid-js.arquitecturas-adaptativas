import { Methods } from '../../src/helpers/helper.utils.js'
import { Hooks   } from '../../src/helpers/helper.utils.js'


function Test () {

  function Aspect (Ext) {
    return function (core) {
      let provided = (Ext.provided || Hooks.Provided) .bind (core)
      let except   = (Ext.except   || Hooks.Except)   .bind (core)
      let before   = (Ext.before   || Hooks.Before)   .bind (core)
      let after    = (Ext.after    || Hooks.After)    .bind (core)
      let around   = (Ext.around   || Hooks.Around)   .bind (core)
      let keys = Methods (core)
      for (let key of keys) {
        let fn = core[key]
        let gn = function (...args) {
          let ok = provided (...args) && !except (...args)
          if (ok) {
            let bOut = before (key, args)
            let rOut = around (args, fn, bOut)
            let aOut = after (key, args, rOut)
            return aOut
          }
        }
        core[key] = gn
      }
    }
  }

  function Traceable (core) {
    return Aspect ({
      before (key, args) {
        this.log = this.log || []
        this.log.push ({key, args})
      }
    })(core)
  }

  function Cacheable (core) {
    return Aspect ({
      around (args, fn) {
        this.cache = this.cache || new Map ()
        let value  = this.cache.get (args)
        value = value || fn (...args)
        this.cache.set (args, value)
        return value
      }
    })(core)
  }

  function Lockable (core) {
    return Aspect ({
      provided () {
        return this.open
      }
    })(core)
  }

  function fx (x) { return x + 1 }
  function fy (x) { return x - 1 }
  
  let CX = { fx, fy }
  let CY = { fx, fy }
  let CZ = { fx, fy }

  Traceable (CX)
  Cacheable (CY)
  Lockable  (CZ)

  CZ.open = false

  let RX = [CX.fx (1),  CX.fx (1)]
  let RY = [CY.fx (1),  CY.fx (1)]
  let RZ = [CZ.fx (1),  CZ.fx (1)]

  return [
    CX, CY, CZ,
    RX, RY, RZ, 
  ]

}

export default Test 
