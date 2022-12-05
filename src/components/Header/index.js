import React from 'react'
import { useHistory } from 'react-router-dom'
import theme from '../../theme'
import {
  Container,
  SubContainer,
  Icon,
} from './styles'
import Button from '../Button'
import mainLogo from '../../assets/mainLogo.svg'
// import Modal from '../Modal'

const Header = () => {
//   const [isLoggedIn, setLoggedIn] = useState(true)
//   const [logout, setLogout] = useState(false)
  const history = useHistory()

  const handleSubmit = bool => {
    if (bool) {
      history.push({
        pathname: '/signup',
      })
    } else {
      history.push({
        pathname: '/',
      })
    }
  }

  return (
    <>
      {/* <Modal
        visible={logout}
        closeFunc={() => setLogout(false)}
      >
        <div style={{ fontFamily: 'Jost' }}>
          Log Out?
        </div>
      </Modal> */}

      <Container>
        <Icon src={mainLogo} alt="Grow Logo" onClick={() => handleSubmit(false)} style={{ display: 'flex', flexDirection: 'row' }} />
        <SubContainer>
          <Button
            text="Sign Up"
            width="20vh"
            height="7vh"
            font="Jost Semibold"
            backgroundColor={theme.colors.beige}
            color={theme.colors.landingOrange}
            onClick={() => handleSubmit(true)}
          />
        </SubContainer>
      </Container>
    </>
  )
}
export default Header
