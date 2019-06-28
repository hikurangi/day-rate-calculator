  
import {
  head,
  join,
  map,
  pipe,
  split,
  tail,
  toUpper
}                   from 'rambda'
import { useState } from 'react'
import set          from 'set-value'
import unset        from 'unset-value'

const useModel = (initialModel = {}) => {
  const [ model, setModel ] = useState(initialModel)


  function setValue (path, value) {
    const copy = { ...model }
    set(copy, path, value)
    setModel(copy)
  }

  function unsetValue (path) {
    const copy = { ...model }
    unset(copy, path)
    setModel(copy)
  }

  function bindInput (key) {
    return {
      name: key,
      label: makeLabel(key),
      value: model[key] || '',
      onChange: e => { setValue(key, e.target.value) }
    }
  }

  return {
    bindInput,
    model,
    setModel,
    setValue,
    unsetValue,
  }
}

export default useModel

function makeLabel (key) {

  const output = pipe(
    split(' '),
    map(word => {
    
      const first      = head(word)
      const remaining  = tail(word)
      const combined = `${toUpper(first)}${remaining}`
      
      return combined
      
    }),
    join(' ')
  )(key)

  return output
}