import Inspect from '../inspect.js' 

function Extends (Ext) {
  return function (Core) {

    return class extends Core {
      constructor (...args) {
        super (...args)
        Inspect (this).install (Ext)
      }
    }

  }
}

export default Extends