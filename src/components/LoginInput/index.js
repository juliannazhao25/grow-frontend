import React from 'react'
import {
  Input,
  Container,
} from './styles'
import Clipboard from '../../assets/Clipboard.svg'

const LoginInput = ({
  width,
  height,
  placeholder,
  value,
  type,
  isShadow,
  onChange,
}) => (
  <Container>
    <img src={Clipboard} alt="" />
    <Input
      width={width}
      height={height}
      type={type}
      value={value}
      shadow={isShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : '0'}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      style={{ control: base => ({ ...base, border: 0, boxShadow: 'none' }) }}
    />
  </Container>
)

export default LoginInput
