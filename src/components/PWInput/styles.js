import styled from 'styled-components'
import theme from '../../theme'

export const Input = styled.input`
  width: ${props => `${props.width}px`};
  height: ${props => props.height};
  font-family: ${props => props.theme.fonts.jostBold};
  font-size: 22px;
  margin-left: 20px;
  color: ${theme.colors.brown};
  padding: 1%;
  background: transparent;
  border: 13px white;
  flex-grow: 1;

  &::placeholder{
    color: black;
  }
  &:focus {
        outline: none;
    }
`

export const Container = styled.div`
  background-color: ${theme.colors.beige};
  height: 60px;
  width: 30vw;
  border-radius: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const StyledLink = styled.a`
  font-family: ${theme.fonts.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  align-self: flex-end;

  color: #9D9D9D;
`
