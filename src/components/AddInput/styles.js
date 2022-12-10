import styled from 'styled-components'

export const Input = styled.input`
  width: 32vw;
  height: 60px;
  font-family: 'Gothic A1';
  font-size: 20px;
  color: ${props => props.fontColor};
  padding: 1vw;
  background-color: ${props => props.backgroundColor};
  outline: none;
  border-style: solid;
  border-color: ${props => props.outline};
  border-radius: 13px;
`
