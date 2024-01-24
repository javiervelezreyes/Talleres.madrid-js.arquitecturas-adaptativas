import T11 from '../../tests/01.Basics/test.01.js'
import T12 from '../../tests/01.Basics/test.02.js'
import T13 from '../../tests/01.Basics/test.03.js'
import T21 from '../../tests/02.Techniques/test.01.js'
import T22 from '../../tests/02.Techniques/test.02.js'
import T23 from '../../tests/02.Techniques/test.03.js'
import T24 from '../../tests/02.Techniques/test.04.js'
import T31 from '../../tests/03.Contract/test.01.js'
import T32 from '../../tests/03.Contract/test.02.js'
import T33 from '../../tests/03.Contract/test.03.js'
import T34 from '../../tests/03.Contract/test.04.js'
import T41 from '../../tests/04.Models/test.01.js'
import T42 from '../../tests/04.Models/test.02.js'
import T43 from '../../tests/04.Models/test.03.js'
import T44 from '../../tests/04.Models/test.04.js'
import T45 from '../../tests/04.Models/test.05.js'
import T51 from '../../tests/05.Inspect/test.01.js'
import T52 from '../../tests/05.Inspect/test.02.js'
import T53 from '../../tests/05.Inspect/test.03.js'
import T54 from '../../tests/05.Inspect/test.04.js'
import T55 from '../../tests/05.Inspect/test.05.js'
import T61 from '../../tests/06.Annotations/test.01.js'
import T62 from '../../tests/06.Annotations/test.02.js'
import T63 from '../../tests/06.Annotations/test.03.js'
import T64 from '../../tests/06.Annotations/test.04.js'
import T65 from '../../tests/06.Annotations/test.05.js'
import T71 from '../../tests/07.Reverse/test.01.js'
import T72 from '../../tests/07.Reverse/test.02.js'
import T73 from '../../tests/07.Reverse/test.03.js'
import T74 from '../../tests/07.Reverse/test.04.js'
import T75 from '../../tests/07.Reverse/test.05.js'
import T81 from '../../tests/08.Extends/test.01.js'
import T82 from '../../tests/08.Extends/test.02.js'
import T83 from '../../tests/08.Extends/test.03.js'
import T84 from '../../tests/08.Extends/test.04.js'

const Tests = {
  T11, T12, T13,
  T21, T22, T23, T24,
  T31, T32, T33, T34,
  T41, T42, T43, T44, T45,
  T51, T52, T53, T54, T55,
  T61, T62, T63, T64, T65,
  T71, T72, T73, T74, T75,
  T81, T82, T83, T84
}

function HLoader () {

  function load (key) {
    return Tests[key]
  }

  return { load }
}

export default HLoader ()
