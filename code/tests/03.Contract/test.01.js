import { Extend } from '../../src/helpers/helper.utils.js'


function Test () {

  function Storable (core) {
    let clone = {...core}
    Extend (core, {
      load () { Object.assign (this, clone) },
      save () { clone = {...this}           }
    })
  }

  let CX = {x : 0}
  let CY = {y : 0}

  Storable (CX)
  Storable (CY)

  return [CX, CY]

}

export default Test 
