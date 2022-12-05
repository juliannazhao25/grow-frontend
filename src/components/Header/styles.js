import styled from 'styled-components'
import theme from '../../theme'

export const Icon = styled.img`
  cursor: pointer;
  margin-left: 2vw;
  margin-top: 5vh;
`

export const Container = styled.div`
  position: sticky;
  height: 10vh;
  width: 100vw;
  top: 0;
  display: flex;
  flex-direction: row;
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
  margin-top: 5vh;
`


export const Logo1 = styled.img`
  width: 100%;
  height: auto;
  background: ${props => props.background};
  object-fit: contain;
`

export const DisplayName = styled.p`
  font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 3vh;
line-height: 90%;
padding-top: 4.5vh;
margin-left: 10px;
/* or 18px */

text-align: center;

color: ${theme.colors.peach};
`
