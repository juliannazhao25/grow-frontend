import styled from 'styled-components'

export const ButtonBox = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 449px) {
    height: 30px;
    width: 85px;
    border: 2px solid;
    border-radius: 20px;
    }
`

export const ButtonText = styled.p`
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-size: 3vh;
  font-weight: 700;
  @media (max-width: 449px) {
    font-size: 10px;
    font-weight: 700;
  }
`
