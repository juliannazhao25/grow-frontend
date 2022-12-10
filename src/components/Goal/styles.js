import styled from 'styled-components'

export const Box = styled.div`
width: 35vw;
height: 20vh;
overflow-y: scroll;
padding: 3vh;
margin: 0 auto 1.5vh auto;

background: black;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 19px;
`

export const Title = styled.p`
font-family: 'Gothic A1 Bold';
color: white;
font-size: 30px;
margin-bottom: 0.5vh;
`

export const Text = styled.p`
font-family: 'Gothic A1';
color: white;
font-size: 16px;
`

export const Category = styled.p`
font-family: 'Gothic A1 Bold';
color: white;
font-size: 16px;
`

export const Row = styled.div`
display: flex;
flex-direction: row;
`

export const Col = styled.div`
display: flex;
width: 15vw;

flex-direction: column;
`
