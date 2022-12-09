import styled from 'styled-components'
import theme from '../../theme'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Logo2 = styled.img`
  width: 2vw;
  height: auto;
  margin-left: 1vw;
  margin-top: 1.5vh;
  cursor: pointer;
`

export const EntryBox = styled.div`
  position: absolute;
  width: 75vw;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  background-color: rgba(255,255,255,0.75);
`

export const Entry = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  margin: 0 auto;

  padding-top: 2vh;
`

export const BizTitle = styled.p`
margin-left: 7vh;
margin-top: 1vh;
min-width: 60vw;

font-family: 'Roboto Bold';
font-size: 60px;

color: #1B0E0B;

word-break: break-word;
`

export const BizSubTitle = styled.p`
  font-family: 'Roboto';
  max-width: 60vw;
font-size: 20px;
margin-left: 7.3vh;
margin-top: 2vh;

color: #317D80;
`

export const Logged = styled.p`
  font-family: 'Roboto Bold';
  max-width: 60vw;
font-size: 20px;
margin-left: 1vw;
height: fit-content;
margin-top: 4vh;
color: #317D80;
`

export const BizBox = styled.div`
padding: 3vh;
margin-top: 3vh;
margin-right: auto;
margin-left: auto;
width: 60vw;
height: fit-content;

background: #7F5130;
border-radius: 5px;
`

export const Streak = styled.p`
  font-family: 'Roboto Bold';
  max-width: 60vw;
font-size: 15px;
margin-left: 7.3vh;
margin-top: 2vh;

color: #1B0E0B;
`

export const Subtitle2 = styled.p`
  width: 35vw;
  font-family: ${theme.fonts.jost};
  text-align: left;
  font-size: 20px;
  color: ${theme.colors.peach}
`
