import styled from 'styled-components'
import theme from '../../theme'

export const ReminderTitle = styled.p`
  font-family: 'Roboto Bold';
font-size: 50px;
text-align: center;
margin-bottom: 2vh;

color: #FEFAE0;
`

export const Line = styled.p`
  font-family: 'Roboto';
font-size: 30px;
text-align: left;

color: #FEFAE0;
margin-bottom: 1.5vh;
`

export const Icon = styled.img`
  cursor: pointer;
  margin-left: 3vw;
  width: 4vw;
`

export const Icon2 = styled.img`
  margin-top: 3vh;
  width: 15vh;
  height: auto;
`

export const Container = styled.div`
  height: 16vh;
  width: 100vw;
  top: 0;
  display: flex;
  flex-direction: row;
  padding-top: 1vh;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: ${props => props.color};
`

export const Sub = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
