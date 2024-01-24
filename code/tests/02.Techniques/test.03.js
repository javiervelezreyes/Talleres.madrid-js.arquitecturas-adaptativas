import { Methods } from '../../src/helpers/helper.utils.js'


function Test () {

  function Traceable (core) {
    let keys = Methods (core)
    for (let key of keys) {
      let fn = core[key]
      let gn = function (...args) {
        this.log.push ({key, args})
        return fn (...args)
      }.bind (core)
      core[key] = gn
    }
    core.log = []
  }

  function Cacheable (core) {
    let keys  = Methods (core)
    for (let key of keys) {
      let fn = core[key]
      let gn = function (...args) {
        let value = this.cache.get (args)
        value = value || fn (...args)
        this.cache.set (args, value)
        return value
      }.bind (core)
      core[key] = gn
    }
    core.cache = new Map
  }

  function Lockable (core) {
    let keys = Methods (core)
    for (let key of keys) {
      let fn = core[key]
      let gn = function (...args) {
        if (this.open) {
          return fn (...args)
        }
      }.bind (core)
      core[key] = gn
    }
    core.open = true
  }

  function fx (x) { return x + 1 }
  function fy (x) { return x - 1 }
  
  let CX = { fx, fy }
  let CY = { fx, fy }
  let CZ = { fx, fy }

  Traceable (CX)
  Cacheable (CY)
  Lockable  (CZ)

  CZ.open = false

  let RX = [CX.fx (1),  CX.fx (1)]
  let RY = [CY.fx (1),  CY.fx (1)]
  let RZ = [CZ.fx (1),  CZ.fx (1)]

  return [
    CX, CY, CZ,
    RX, RY, RZ, 
  ]
  
}

export default Test 
