/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import theme from '../../theme'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import LoginInput from '../../components/LoginInput'
import PWInput from '../../components/PWInput'

import { Background } from '../Greeting/styles'

const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [pw, setPw] = useState('')

  const handleSubmit = bool => {
    if (bool) {
      history.push({
        pathname: '/home',
      })
    }
  }

  return (
    <Background>
      <Header />
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          height: '81vh',
          justifyContent: 'center',
        }}
      >
        <div style={{ margin: '6vh auto', flexDirection: 'column' }}>
          <LoginInput
            onChange={e => { setUsername(e) }}
            width={348}
            height={60}
          />
          <PWInput
            onChange={e => { setPw(e) }}
            width={348}
            height={60}
          />
          <div style={{ margin: '6vh auto', width: 'fit-content' }}>
            <Button
              text="Log In"
              width="20vh"
              height="7vh"
              font="Jost Semibold"
              backgroundColor={theme.colors.beige}
              color={theme.colors.landingOrange}
              onClick={() => handleSubmit(true)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Background>
  )
}

export default Login
