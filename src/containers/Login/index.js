
import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import theme from '../../theme'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import LoginInput from '../../components/LoginInput'
import PWInput from '../../components/PWInput'

import { Background, Error } from '../Greeting/styles'
import { LOGIN } from './graphql'
import { useGlobalContext } from '../../utils/globalContext'

const Login = () => {
  const location = useLocation()
  const [isLogin, setIsLogin] = useState(true)
  useEffect(() => {
    if (location.state) { setIsLogin(location.state) } // result: 'some_value'
  }, [location])
  const { setIsSignedIn } = useGlobalContext()
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPw] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [usernameErrMsg, setUsernameErrMsg] = useState('')
  const [passwordErrMsg, setPasswordErrMsg] = useState('')
  const [login] = useMutation(LOGIN, {
    variables:
    {
      username,
      password,
    },
    onCompleted: async () => {
      await setIsSignedIn(true)
      history.push({
        pathname: '/home',
      })
    },
    onError: () => setErrMsg('Invalid login information'),
  })

  const handleSubmit = () => {
    setUsernameErrMsg('')
    setPasswordErrMsg('')
    setErrMsg('')
    if (username === '') {
      setUsernameErrMsg('Please enter a username!')
    }
    if (password === '') {
      setPasswordErrMsg('Please enter a password!')
    }
    if (username !== '' && password !== '') {
      login()
    }
  }


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
        <div style={{ margin: '6vh auto', flexDirection: 'column' }}>
          <LoginInput
            onChange={e => { setUsername(e) }}
            width={348}
            height={60}
          />

          <div style={{ height: '0.5vh', width: 'fit-content' }}>
            <Error>{usernameErrMsg}</Error>
          </div>

          <PWInput
            onChange={e => { setPw(e) }}
            width={348}
            height={60}
          />
          <div style={{ height: '0.5vh', width: 'fit-content' }}>
            <Error>{passwordErrMsg}</Error>
          </div>
          <div style={{ margin: '6vh auto', width: 'fit-content' }}>
            <Button
              text="Log In"
              width="20vh"
              height="7vh"
              font="Jost Semibold"
              backgroundColor={theme.colors.beige}
              color={theme.colors.landingOrange}
              onClick={handleSubmit}
            />
          </div>
          <div style={{ height: '0.1vh', margin: '2vh auto', width: 'fit-content' }}>
            <Error>{errMsg}</Error>
          </div>
        </div>
      </div>
      <Footer />
    </Background>
  )
}

export default Login
