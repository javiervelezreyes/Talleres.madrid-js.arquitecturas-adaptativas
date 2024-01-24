import HLoader from './helper.loader.js'

const LINKS = '.links'
const TYPE  = 'click'
const KEY   = 'key'

function HInit (ref) {
  document
    .querySelector (ref)
    .addEventListener (TYPE, async function (event) {
      let {target} = event
      let key      = target.getAttribute (KEY)
      let title    = target.textContent.trim ().toUpperCase ()
      if (key) {
        let Test = HLoader.load (key)
        let xs   = Test () || []
        console.log (title)
        for (let x of xs) console.log (x)
      }
      
    })
}

HInit (LINKS)