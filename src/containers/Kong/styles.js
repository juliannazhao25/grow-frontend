import styled from 'styled-components'

export const Background = styled.div`
  height: 84vh;
  background-color: #FEFAE0;
  overflow: scroll;
  width: 100vw;
`

export const Title = styled.p`
font-family: 'Roboto Bold';
font-size: 90px;

color: #1B0E0B;
`

export const EmptyText = styled.p`
font-family: 'Roboto Bold';
font-size: 50px;

color: #317D80;
`

export const Logo = styled.img`
  width: 4vw;
  height: auto;
  margin-left: 1vw;
  cursor: pointer;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  margin: 3vh auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: 0 auto;
  height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
`
