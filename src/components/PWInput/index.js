import React from 'react'
import {
  Input,
  Container,
} from './styles'
import Key from '../../assets/Key.svg'

const PWInput = ({
  width,
  height,
  placeholder,
  value,
  type,
  onChange,
  children,
  error = false,
}) => (
  <Container error={error}>
    <img src={Key} alt="" />
    <Input
      width={width}
      height={height}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      error={error}
    />
    {children}
    <div style={{ marginRight: 32 }} />
  </Container>
)

export default PWInput
