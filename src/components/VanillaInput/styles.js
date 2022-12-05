import styled from 'styled-components'

export const Input = styled.input`
  background-color: ${props => props.theme.colors.beige};
  width: 32vw;
  height: 60px;
  font-family: ${props => props.theme.fonts.jostBold};
  font-size: 20px;
  color: ${props => props.theme.colors.brown};
  padding: 1vw;
  background: ${props => props.background};
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  margin-bottom: 5vh;

  &::placeholder{
    color: ${props => props.theme.colors.brown};
  }
  textarea:focus, input:focus{
    outline: none;
  }
  &:focus {
        outline: none;
    }
`
