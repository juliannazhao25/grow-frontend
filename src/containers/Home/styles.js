import styled from 'styled-components'
import theme from '../../theme'

export const Title = styled.div`
font-family: 'Jost Bold';
font-size: 60px;
margin-bottom: 6vh;

text-align: center;

color: #998470;
`

export const Background = styled.div`
  height: 100vh;
  background-color: ${theme.colors.landingLightGreen};
  overflow: scroll;
  width: 100vw;
`

export const Logo2 = styled.img`
  width: 13vw;
  height: auto;
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50vw;
  margin: 0 auto;
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
  justify-content: center;
  width: fit-content;
`
