
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import theme from '../../theme'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import VanillaInput from '../../components/VanillaInput'

import { Background } from '../Greeting/styles'

const Signup = () => {
  const location = useLocation()
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if (location.state) { setIsLogin(location.state) } // result: 'some_value'
  }, [location])
  const [firstName, setFirstName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPw] = useState('')

  return (
    <Background>
      <Header isLogin={isLogin} />
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          height: '81vh',
          justifyContent: 'center',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
        >
          <VanillaInput
            placeholder="First Name"
            type="text"
            defaultValue={firstName}
            onChange={setFirstName}
          />
          <VanillaInput
            placeholder="Username"
            type="text"
            defaultValue={username}
            onChange={setUsername}
          />
          <VanillaInput
            placeholder="Password"
            type="text"
            defaultValue={password}
            onChange={setPw}
          />
        </div>
        <div style={{ margin: '3vh auto', width: 'fit-content' }}>
          <Button
            text="Sign Up"
            width="20vh"
            height="7vh"
            font="Jost Semibold"
            backgroundColor={theme.colors.beige}
            color={theme.colors.landingOrange}
          />
        </div>
      </div>
      <Footer />
    </Background>
  )
}

export default Signup
