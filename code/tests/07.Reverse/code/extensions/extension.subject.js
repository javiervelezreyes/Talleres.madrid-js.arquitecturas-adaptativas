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

    function uninstall () {
      let key = Ext.name 
      core[POINTS] && delete core[POINTS][key]
    }

    return { install, uninstall }

  }
}

export default Subject