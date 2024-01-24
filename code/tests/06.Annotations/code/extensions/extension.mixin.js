import { Create   } from '../../../../src/helpers/helper.utils.js'
import { getProto } from '../../../../src/helpers/helper.utils.js'
import { setProto } from '../../../../src/helpers/helper.utils.js'


function Mixin (Ext) {
  return function (core) {

    function install () {
      let ext   = Create (Ext, core)
      let proto = getProto (core)
      setProto (core, ext)
      setProto (ext, proto)
    }

    return { install }
    
  }
}

export default Mixin