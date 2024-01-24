function Test () {

  function WX (x) { return x + x }
  function WY (x) { return x * x }

  function Worker () {
    function execute (xs) {
      let ys = []
      for (let x of xs) {
        ys = [...ys, this.work (x)]
      }
      return ys
    }
    return { execute }
  }

  function Extends (worker, work) {
    return { ...worker, work }
  } 

  let worker  = Worker ()
  let WorkerX = Extends (worker, WX)
  let WorkerY = Extends (worker, WY)

  let RX = WorkerX.execute ([1, 2, 3])
  let RY = WorkerY.execute ([1, 2, 3])

  return [RX, RY]

}

export default Test 
