import styled from 'styled-components'
import Modal from 'react-modal'

export const Main = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  position: relative;
  z-index: 200;
  border: none;
`

export const PopupModal2 = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.5); // necessary due to dependency bug
  position: relative;
  z-index: 200;
  border: none;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 12vh auto;
  align-items: left;
  width: 40vw;
`

export const Body2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: left;
  width: 40vw;
  height: 60vh;
  overflow-y: scroll;
`

export const Body3 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: left;
  width: 40vw;
  justify-content: center;
  height: 50vh;
  overflow-y: scroll;
`

export const WhiteContainer = styled.div`
  padding-top: 1.5%;
  position: absolute;
  width: 50vw;
  height: 100vh;
  right: 0;
  background-color: ${props => props.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px 0px 0px 40px;
`

export const Container = styled.div`
  text-align: left;
  background-color: white;
  height: 80vh;
  width: 40vw;
`

export const CloseButton = styled.img`
  margin-top: 5vh;
  margin-right: 5vh;
  float: right;
  width: 4vh;
  cursor: pointer;
`

export const LawTitle = styled.p`
font-family: 'Gothic A1 Bold';
color: white;
font-size: 70px;
margin-bottom: 2vh;
`

export const GoalTitle = styled.p`
font-family: 'Gothic A1 Bold';
font-size: 70px;
color: black;
margin-bottom: 2vh;
`

export const HabitTitle = styled.p`
font-family: 'Roboto Bold';
font-size: 70px;
color: #FEFAE0;
margin-bottom: 4vh;
`

export const LawDesc = styled.p`
font-family: 'Gothic A1';
font-size: 30px;
color: white;

  margin-top: 6vh;
    margin-bottom: 1vh;
`

export const LawDesc1 = styled.p`
font-family: 'Gothic A1';
font-size: 30px;
color: white;

    margin-bottom: 1vh;
`

export const GoalDesc = styled.p`
font-family: 'Gothic A1';
font-size: 30px;
color: black;

  margin-top: 6vh;
    margin-bottom: 1vh;
`

export const GoalDesc1 = styled.p`
font-family: 'Gothic A1';
font-size: 30px;
color: black;

    margin-bottom: 1vh;
`

export const HabitDesc = styled.p`
font-family: 'Roboto';
font-size: 30px;
color: #FEFAE0;

  margin-top: 6vh;
  margin-bottom: 1vh;
`

export const HabitDesc1 = styled.p`
font-family: 'Gothic A1';
font-size: 30px;
color: #FEFAE0;

    margin-bottom: 1vh;
`

export const HabitDesc2 = styled.p`
font-family: 'Gothic A1';
font-size: 20px;
color: #FEFAE0;

    margin-bottom: 1vh;
`
