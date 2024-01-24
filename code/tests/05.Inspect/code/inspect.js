import { Extend   } from '../../../src/helpers/helper.utils.js'
import { getProto } from '../../../src/helpers/helper.utils.js'
import { setProto } from '../../../src/helpers/helper.utils.js'
import { Methods  } from '../../../src/helpers/helper.utils.js'
import { Hooks    } from '../../../src/helpers/helper.utils.js'
import { Create   } from '../../../src/helpers/helper.utils.js'


const POINTS = Symbol.for ('Extensions')

function Inspect (core) {

  function Trait (Ext) {
    let ext   = Create (Ext, core)
    let trait = Extend (core, ext)
    return trait
  }

  function Mixin (Ext) {
    let ext   = Create (Ext, core)
    let proto = getProto (core)
    setProto (core, ext)
    setProto (ext, proto)
  }

  function Subject (Ext) {
    let key = Ext.name 
    let ext = Create (Ext, core)
    core[POINTS]      = core[POINTS] || {}
    core[POINTS][key] = ext
  }
  
  function Aspect (Ext) {
    let ext      = Create (Ext, core)
    let provided = (ext.provided || Hooks.Provided) .bind (core)
    let except   = (ext.except   || Hooks.Except)   .bind (core)
    let before   = (ext.before   || Hooks.Before)   .bind (core)
    let after    = (ext.after    || Hooks.After)    .bind (core)
    let around   = (ext.around   || Hooks.Around)   .bind (core)
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

  function Forward (Ext) {
    let proxy = {}
    let keys  = Methods (core)
    let ext   = Create (Ext, core)
    for (let key of keys) {
      proxy[key] = function (...args) {
        return ext.hook (args, key)
      }
    }
    return proxy
  }

  return {
    Trait,
    Mixin,
    Subject,
    Aspect,
    Forward
  }

}

export default Inspect