import { Extend   } from '../../src/helpers/helper.utils.js'
import { Keys     } from '../../src/helpers/helper.utils.js'


function Test () {

  function Enumerable (core) {
    let keys = Keys (core)
    Extend (core, {
      map (fn) {
        let ys = []
        for (let k in this) {
          let x = core[k]
          let y = fn (x)
          ys = [...ys, y] 
        }
        return out
      },
      reduce : [].reduce .bind (keys),
      filter : [].filter .bind (keys),
      every  : [].every  .bind (keys), 
      some   : [].some   .bind (keys)
    })
  }

  let CX = {x : 0}
  let CY = {y : 0}

  Enumerable (CX)
  Enumerable (CY)

  return [CX, CY]
}

export default Test 
