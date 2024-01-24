function Test () {

  function WX (x) { return x + x }
  function WY (x) { return x * x }

  function Worker (work) {
    function execute (xs) {
      let ys = []
      for (let x of xs) {
        ys = [...ys, work (x)]
      }
      return ys
    }
    return { execute }
  }

  let RX = Worker (WX).execute ([1, 2, 3])
  let RY = Worker (WY).execute ([1, 2, 3])

  return [RX, RY]

}

export default Test 
