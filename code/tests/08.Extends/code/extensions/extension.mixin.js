import { Create   } from '../../../../src/helpers/helper.utils.js'
import { getProto } from '../../../../src/helpers/helper.utils.js'
import { setProto } from '../../../../src/helpers/helper.utils.js'


const MIXIN = Symbol.for ('Mixin')

function Mixin (Ext) {
  return function (core) {

    function install () {
      let ext   = Create (Ext, core)
      let proto = getProto (core)
      setProto (core, ext)
      setProto (ext, proto)
      ext[MIXIN] = Ext
    }

    function uninstall () {
      let end   = false
      let found = false
      let self  = core
      let proto = getProto (core)
      while (!end) {
        found = proto[MIXIN] == Ext
        end   = found || !proto[MIXIN]
        if (!found) {
          self = proto
          proto = getProto (self)
        }
      }
      if (found) {
        let grand = getProto (proto)
        setProto (self, grand)
        setProto (proto, null)
      }
    }

    return { install, uninstall }
    
  }
}

export default Mixin