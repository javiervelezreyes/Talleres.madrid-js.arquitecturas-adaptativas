import { Create } from '../../../../src/helpers/helper.utils.js'


const POINTS = Symbol.for ('Extensions')

function Subject (Ext) {
  return function I (core) {

    function install () {
      let key = Ext.name 
      let ext = Create (Ext, core)
      core[POINTS]      = core[POINTS] || {}
      core[POINTS][key] = ext
      I.Point = key
    }

    return { install }

  }
}

export default Subject