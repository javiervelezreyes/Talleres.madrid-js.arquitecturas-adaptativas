import { Create } from '../../../../src/helpers/helper.utils.js'
import { Extend } from '../../../../src/helpers/helper.utils.js'
import { Keys   } from '../../../../src/helpers/helper.utils.js'

let Store = new Map ()

function Trait (Ext) {
  return function (core) {

    function install () {
      let ext   = Create (Ext, core)
      let trait = Extend (core, ext)
      let keys  = Keys (ext)
      Store.set (Ext, keys) 
      return trait
    }

    function uninstall () {
      let keys = Store.get (Ext)
      for (let key of keys) {
        delete core[key]
      }
    }

    return { install, uninstall }
    
  }
}

export default Trait