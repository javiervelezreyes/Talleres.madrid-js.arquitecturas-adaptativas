import { Create  } from '../../../../src/helpers/helper.utils.js'
import { Methods } from '../../../../src/helpers/helper.utils.js'
import { Hooks   } from '../../../../src/helpers/helper.utils.js'


function Aspect (Ext) {
  return function (core) {

    function install () {
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

    return { install }
  }
}

export default Aspect