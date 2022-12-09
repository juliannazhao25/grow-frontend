
import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import theme from '../../theme'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import VanillaInput from '../../components/VanillaInput'

import { Background, Error } from '../Greeting/styles'
import { REGISTER, LOGIN } from './graphql'
import { useGlobalContext } from '../../utils/globalContext'

const Signup = () => {
  const { setIsSignedIn } = useGlobalContext()
  const history = useHistory()
  const location = useLocation()
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if (location.state) { setIsLogin(location.state) } // result: 'some_value'
  }, [location])
  const [firstName, setFirstName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPw] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [nameErrMsg, setNameErrMsg] = useState('')
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
    onError: err => setErrMsg(err),
  })

  const [register] = useMutation(REGISTER, {
    variables: {
      input: {
        username,
        firstName,
        password,
      },
    },
    onCompleted: () => login(),
    onError: () => setErrMsg('Username taken :('),
  })

  const handleSubmit = () => {
    setNameErrMsg('')
    setUsernameErrMsg('')
    setPasswordErrMsg('')
    setErrMsg('')
    if (firstName === '') {
      setNameErrMsg('Please enter a first name!')
    }
    if (username === '') {
      setUsernameErrMsg('Please enter a username!')
    }
    if (password === '') {
      setPasswordErrMsg('Please enter a password!')
    }
    if (username !== '' && password !== '') {
      register()
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
          <div style={{ height: '1vh', width: 'fit-content' }}>
            <Error>{nameErrMsg}</Error>
          </div>
          <VanillaInput
            placeholder="Username"
            type="text"
            defaultValue={username}
            onChange={setUsername}
          />
          <div style={{ height: '1vh', width: 'fit-content' }}>
            <Error>{usernameErrMsg}</Error>
          </div>
          <VanillaInput
            placeholder="Password"
            type="text"
            defaultValue={password}
            onChange={setPw}
          />
          <div style={{ height: '1vh', width: 'fit-content' }}>
            <Error>{passwordErrMsg}</Error>
          </div>
        </div>
        <div style={{ margin: '5vh auto', width: 'fit-content' }}>
          <Button
            text="Sign Up"
            width="20vh"
            height="7vh"
            font="Jost Semibold"
            backgroundColor={theme.colors.beige}
            color={theme.colors.landingOrange}
            onClick={handleSubmit}
          />
        </div>
        <div style={{ height: '1vh', margin: '1vh auto', width: 'fit-content' }}>
          <Error>{errMsg}</Error>
        </div>
      </div>
      <Footer />
    </Background>
  )
}

export default Signup
