import styled from 'styled-components'

export const Title = styled.div`
font-family: 'Familjen Grotesk Bold';
font-size: 80px;
margin-bottom: 6vh;

text-align: center;

color: #998470;
`

export const C1 = styled.div`
font-family: 'Familjen Grotesk Bold';
font-size: 60px;
margin-top: 2vh;

text-align: center;

color: #EABE7C;
`

export const C2 = styled.div`
font-family: 'Familjen Grotesk Bold';
font-size: 60px;
margin-top: 2vh;

text-align: center;

color: #ECE4B7;
`

export const C3 = styled.div`
font-family: 'Familjen Grotesk Bold';
font-size: 60px;
margin-top: 2vh;

text-align: center;

color: #D9DD92;
`

export const SubTitle = styled.div`
font-family: 'Familjen Grotesk Bold';
font-size: 50px;
width: fit-content;
margin: 0 auto;
animation: fadeIn 2s;
-webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;

color: #ECE4B7;;
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`

export const SubTitle2 = styled.div`
font-family: 'Familjen Grotesk Bold';
font-size: 50px;
width: fit-content;
margin: 0 auto;
animation: fadeIn 2s;
-webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;

color: #ECE4B7;;
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`

export const Background = styled.div`
  height: 100vh;
  background-color: #D9DD92;
  overflow: scroll;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
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
  width: 70vw;
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

export const Box1 = styled.div`
width: 17vw;
min-height: 40vh;
background: #4A4944;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 19px;
margin-right: 2vw;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4vh;
`

export const Box2 = styled.div`
width: 17vw;
min-height: 40vh;
background: #317D80;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 19px;
margin-right: 2vw;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4vh;
`

export const Box3 = styled.div`
width: 17vw;
min-height: 40vh;
background: #EABE7C;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 19px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4vh;
`

export const MedBox = styled.div`
background: #317D80;
opacity: 0.8;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 19px;
width: 50vw;
height: 60vh;
padding: 4vh;
justify-content: center;
display: flex;
flex-direction: column;
`

export const SolidBox = styled.div`
background: none;
justify-content: center;
display: flex;
flex-direction: column;
width: fit-content;
margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
`
