import styled from 'styled-components'
import Modal from 'react-modal'
import theme from '../../theme'

export const PopupModal = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(32, 32, 32, 0.3); // necessary due to dependency bug
  position: relative;
  z-index: 100;
  border: none;
`

export const Body = styled.div`
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WhiteContainer = styled.div`
  top: 30vh;
  height: fit-content; 
  max-height: 85%;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.brown};
  padding: 3%;
  position: relative;
  z-index: 200;
  margin: 0 auto;
  width: 50%;
  @media (max-width: 500px) {
      width: 80%;
      padding: 5%;
  }
`

export const Title = styled.p`
  font-family: ${theme.fonts.openSans};
  font-size: 4.5vh;
  font-weight: 700;
  line-height: 54px;
  color: black;`

export const SubTitle = styled.p`
margin-top: 2%;
font-family: ${theme.fonts.openSans};
line-height: 4vh;
  font-size: 2.5vh;
  font-weight: 700;
  color: #F49650;
`
