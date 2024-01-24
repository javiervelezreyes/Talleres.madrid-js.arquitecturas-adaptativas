

function Inspect (core) {

  function   install (Ext) { return Ext (core).  install () }
  function uninstall (Ext) { return Ext (core).uninstall () }

  return { install, uninstall }

}

export default Inspect