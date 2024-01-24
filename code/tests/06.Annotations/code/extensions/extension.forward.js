import { Create   } from '../../../../src/helpers/helper.utils.js'
import { Methods  } from '../../../../src/helpers/helper.utils.js'


function Forward (Ext) {
  return function (core) {

    function install () {
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

    return { install }
    
  }
}

export default Forward