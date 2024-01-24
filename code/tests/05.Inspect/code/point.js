const POINTS = Symbol.for ('Extensions')

function Point (Ext) {
  return function (core) {
    let key     = Ext.name
    let subject = core[POINTS][key]
    return subject
  }
}

export default Point