import React from 'react'
import { ButtonBox, ButtonText } from './styles'

const Button = ({
  text,
  width,
  height,
  onClick,
  backgroundColor,
  font,
  color,
}) => (
  <ButtonBox
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    onClick={() => onClick()}
    style={{ backgroundColor: { backgroundColor } }}
  >
    <ButtonText color={color} font={font} style={{ cursor: 'pointer' }}>
      {text}
    </ButtonText>
  </ButtonBox>
)

export default Button
