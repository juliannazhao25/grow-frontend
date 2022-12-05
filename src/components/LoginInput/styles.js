import styled from 'styled-components'

export const Input = styled.input`
  width: ${props => `${props.width - 150}px`};
  font-family: ${props => props.theme.fonts.jostBold};
  font-size: 22px;
  margin-left: 20px;
  color: ${props => props.theme.colors.brown};
  padding: 1%;
  background: transparent;
  border: 13px white;
  box-shadow: ${props => props.shadow};
  flex-grow: 1;

  &::placeholder{
    color: black;
  }
  &:focus {
        outline: none;
    }
`

export const Container = styled.div`
  background-color: #FAEDCD;
  width: 30vw;
  height: ${props => props.height};
  border-radius: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 7vh;
`
