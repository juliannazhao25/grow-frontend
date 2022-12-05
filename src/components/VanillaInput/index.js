import React from 'react'
import { Input } from './styles'

const VanillaInput = ({
  placeholder,
  value,
  type,
  onChange,
  outline,

}) => {
  const outline2 = outline || 'white'
  return (
    <Input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      outline={outline2}
    />
  )
}

export default VanillaInput
