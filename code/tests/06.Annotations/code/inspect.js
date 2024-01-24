

function Inspect (core) {

  function install (Ext) {
    return Ext (core).install ()
  }

  return { install }

}

export default Inspect