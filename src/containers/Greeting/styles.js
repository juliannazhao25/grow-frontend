import styled from 'styled-components'
import theme from '../../theme'

export const Background = styled.div`
  height: 100vh;
  background-color: ${theme.colors.landingLightGreen};
  overflow: scroll;
  width: 100vw;
`

export const Logo2 = styled.img`
  width: 20vw;
  height: auto;
  margin: 0 auto;
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
