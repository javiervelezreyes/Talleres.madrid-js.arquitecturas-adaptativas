function Test () {

  const WX = `function (x) { return x + x }`
  const WY = `function (x) { return x * x }`

  function Worker (work) {
    return function (xs) {
      return `
        function Worker (xs) {
          function execute () {
            let ys = []
            let fn = ${work}
            for (let x of xs) {
              ys = [...ys, fn (x)]
            }
            return ys
          }
          return { execute }
        }
        Worker ([${xs}]).execute ()
    `
    }
  }

  let TX = Worker (WX) ([1, 2, 3])
  let TY = Worker (WY) ([1, 2, 3])

  let RX = eval (TX)
  let RY = eval (TY)

  return [RX, RY]
}

export default Test 

