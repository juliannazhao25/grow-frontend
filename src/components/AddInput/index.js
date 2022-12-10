import React from 'react'
import { Input } from './styles'

const AddInput = ({
  placeholder,
  value,
  type,
  onChange,
  outline,
  fontColor,
  backgroundColor,

}) => {
  const outline2 = outline || 'white'
  return (
    <Input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      outline={outline2}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    />
  )
}

export default AddInput
