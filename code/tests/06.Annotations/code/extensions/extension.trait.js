import { Create } from '../../../../src/helpers/helper.utils.js'
import { Extend } from '../../../../src/helpers/helper.utils.js'


function Trait (Ext) {
  return function (core) {

    function install () {
      let ext   = Create (Ext, core)
      let trait = Extend (core, ext)
      return trait
    }

    return { install }
    
  }
}

export default Trait