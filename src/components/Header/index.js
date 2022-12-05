/* eslint-disable no-nested-ternary */
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

const Header = ({ isLogin, isLoggedIn }) => {
//   const [isLoggedIn, setLoggedIn] = useState(true)
//   const [logout, setLogout] = useState(false)
  const history = useHistory()

  const handleSubmit = bool => {
    if (bool === 'signup') {
      history.push({
        pathname: '/signup',
      })
    } else if (bool === 'login') {
      history.push({
        pathname: '/login',
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
          {isLogin
            ? (
              <>
                <Button
                  text="Sign Up"
                  width="20vh"
                  height="7vh"
                  font="Jost Semibold"
                  backgroundColor={theme.colors.beige}
                  color={theme.colors.landingOrange}
                  onClick={() => handleSubmit('signup')}
                />
              </>
            ) : (
              isLoggedIn
                ? (
                  <>
                    <Button
                      text="Log Out"
                      width="20vh"
                      height="7vh"
                      font="Jost Semibold"
                      backgroundColor={theme.colors.beige}
                      color={theme.colors.landingOrange}
                      onClick={() => handleSubmit('logout')}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      text="Log In"
                      width="20vh"
                      height="7vh"
                      font="Jost Semibold"
                      backgroundColor={theme.colors.beige}
                      color={theme.colors.landingOrange}
                      onClick={() => handleSubmit('login')}
                    />
                  </>
                )
            )}
        </SubContainer>
      </Container>
    </>
  )
}
export default Header
