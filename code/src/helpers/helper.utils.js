export const Extend   = Object.assign
export const Keys     = Object.keys
export const getProto = Object.getPrototypeOf
export const setProto = Object.setPrototypeOf
export const PKeys    = x => Object.getOwnPropertyNames (getProto (x))
export const IsMethod = x => y => x[y].call && x[y].apply 
export const Methods  = x => Keys (x).filter (IsMethod (x))
export const Hooks    = {
  Provided  ()        { return true      },
  Except    ()        { return false     },
  Before    ()        { return undefined },
  After     (x, y, z) { return z         },
  Around    (x, y)    { return y (...x)  }
}

export function Create (Ext, core) {
  let ext  = new Ext (core)
  let keys = PKeys (ext)
  let out  = {}
  for (let key in ext)  out[key] = ext[key]
  for (let key of keys) out[key] = ext[key]
  delete out.constructor
  return out
}