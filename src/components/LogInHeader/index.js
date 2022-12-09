/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import theme from '../../theme'
import {
  Container,
  SubContainer,
  Icon,
  Icon2,
  DisplayName,
  Logout,
} from './styles'
import Button from '../Button'
import User from '../../assets/User.svg'
import Power from '../../assets/Power.svg'
import Modal from '../Modal'

const LoginHeader = () => {
//   const [isLoggedIn, setLoggedIn] = useState(true)
  const [logout, setLogout] = useState(false)
  const history = useHistory()

  const handleSubmit = () => {
    history.push({
      pathname: '/',
    })
  }

  return (
    <>
      <Modal
        visible={logout}
        closeFunc={() => setLogout(false)}
        color={theme.colors.brown}
      >
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <Logout>Log Out?</Logout>

          <div style={{ margin: '6vh auto', flexDirection: 'row' }}>
            <span style={{ marginRight: '7vw' }}>
              <Button
                text="Yes"
                width="20vh"
                height="7vh"
                font="Jost Semibold"
                backgroundColor={theme.colors.beige}
                color={theme.colors.landingOrange}
                onClick={() => handleSubmit(false)}
              />
            </span>
            <Button
              text="No"
              width="20vh"
              height="7vh"
              font="Jost Semibold"
              backgroundColor={theme.colors.beige}
              color={theme.colors.landingOrange}
              onClick={() => setLogout(false)}
            />
          </div>
        </div>
      </Modal>

      <Container>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Icon src={User} alt="Grow Logo" onClick={() => handleSubmit(false)} style={{ display: 'flex', flexDirection: 'row' }} />
          <DisplayName>NAME</DisplayName>
        </div>
        <SubContainer>
          <Icon2 src={Power} alt="Grow Logo" onClick={() => setLogout(true)} style={{ display: 'flex', flexDirection: 'row' }} />
        </SubContainer>
      </Container>
    </>
  )
}
export default LoginHeader
