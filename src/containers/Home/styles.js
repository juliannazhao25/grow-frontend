import styled from 'styled-components'
import theme from '../../theme'

export const Background = styled.div`
  height: 100vh;
  background-color: ${theme.colors.landingLightGreen};
  overflow: scroll;
  width: 100vw;
`

export const Logo1 = styled.img`
  margin-left: 7.5%;
  width: 80vw;
  height: auto;
  background: ${props => props.background};
  opacity: 0.2;
  z-index: -3;
`

export const Logo2 = styled.img`
  width: 20vw;
  background-color: pink;
  height: auto;
  margin: 0 auto;
`

export const BrownContainer = styled.div`
  display: flex;
  flex-direction: column;

  top: 33vh;
  right: 25vw;
  left: 25vw;
  position: absolute;
  margin: 0 auto;
  width: 50vw;
  border-radius: 19px;
  background: ${theme.colors.milkChoco};
  z-index: 3;
`

export const Title = styled.p`
  font-family: ${theme.fonts.jostSemi};
  font-size: 50px;
  color: ${theme.colors.peach};
`

export const Subtitle = styled.p`
  width: 35vw;
  margin: 0 auto;
  font-family: ${theme.fonts.jostSemi};
  text-align: center;
  font-size: 20px;
  color: ${theme.colors.peach};
`

export const Box = styled.div`
  margin: 3vh auto;
  background-color: ${theme.colors.darkChoco};
  height: 9vh;
  padding: 1.5vh;
  width: fit-content;
  border-radius: 19px;
`

export const EntryBox = styled.div`
  padding: 3vh;
  position: absolute;
  top: 33vh;
  right: 10vw;
  min-width: 80vw;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-height: 70vh;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.75);
`

export const EntryBox2 = styled.div`
  padding: 3vh;
  position: absolute;
  top: 27vh;
  right: 10vw;
  min-width: 80vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-height: 70vh;
  z-index: 10;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Entry = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  z-index: 10;
  margin-top: 2vh;
  margin-bottom: 2vh;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const BizTitle = styled.p`
  margin-left: 7vh;
  margin-top: 1vh;
  min-width: 60vw;
  font-family: "Jost Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 5vh;
  line-height: 90%;

  color: #7f5130;
`

export const BizSubTitle = styled.p`
  font-family: "Jost";
  max-width: 60vw;
  font-style: normal;
  font-weight: 400;
  font-size: 2vh;
  line-height: 3vh;
  margin-left: 7vh;
  margin-top: 1vh;

  color: #7f5130;
`

export const Click = styled.div`
  cursor: pointer;
`

export const BizBox = styled.div`
  padding: 3vh;
  margin-top: 3vh;
  margin-right: auto;
  margin-left: auto;
  width: 60vw;
  height: fit-content;

  background: #7f5130;
  border-radius: 5px;
`

export const Subtitle2 = styled.p`
  width: 35vw;
  font-family: ${theme.fonts.jost};
  text-align: left;
  font-size: 20px;
  color: ${theme.colors.peach};
`
