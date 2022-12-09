import styled from 'styled-components'
import theme from '../../theme'

export const Icon = styled.img`
  cursor: pointer;
  margin-left: 3vw;
`

export const Icon2 = styled.img`
  margin-right: 0.5vw;
`

export const Container = styled.div`
  position: sticky;
  height: 10vh;
  width: 100vw;
  top: 0;
  display: flex;
  flex-direction: row;
  padding-top: 1vh;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  @media (max-width: 500px) {
      box-sizing: border-box;
  }
`

export const SubContainer = styled.div`
  height: 14vh;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2vw;
`


export const Logo1 = styled.img`
  width: 100%;
  height: auto;
  background: ${props => props.background};
  object-fit: contain;
`

export const DisplayName = styled.p`
    font-family: 'Jost Bold';
    height: 10vh;
    font-size: 4vh;
    margin-left: 10px;
    display: flex;
    align-items: center;
/* or 18px */
    justify-content: center;
    color: ${theme.colors.brown};
`

export const Logout = styled.p`
    font-family: 'Jost Bold';
    font-size: 60px;
    color: #FAEDCD;

    text-align: center;
`
