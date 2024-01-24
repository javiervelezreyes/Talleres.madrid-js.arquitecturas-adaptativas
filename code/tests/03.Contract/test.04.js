import { Extend } from '../../src/helpers/helper.utils.js'


function Test () {

  function Executable (core) {
    Extend (core, {
      execute (x) {
        let ys = []
        for (let task of this.tasks) {
          let y = task (x)
          ys = [...ys, y]
        }
        return ys
      }
    })
  }

  function Worker () {
    return {
      tasks : [],
      Task (task) {
        this.tasks.push (task)
        return this
      }
    }
  }

  function TX (x) { return x + x }
  function TY (x) { return x * x }

  let worker = Worker ()
  worker
    .Task (TX) 
    .Task (TY)
  
  Executable (worker)
  let RX = worker.execute (1)
  let RY = worker.execute (2)
  let RZ = worker.execute (3)

  return [RX, RY, RZ]
}

export default Test 
