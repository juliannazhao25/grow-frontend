import React from 'react'
import { useHistory } from 'react-router-dom'
import theme from '../../theme'

import Button from '../../components/Button'
import Footer from '../../components/Footer'

import mainLogo from '../../assets/mainLogo.svg'

import { Background, Logo2 } from './styles'

const Greeting = () => {
  const history = useHistory()

  const handleSubmit = bool => {
    if (bool) {
      history.push({
        pathname: '/login',
      })
    } else {
      history.push({
        pathname: '/signup',
      })
    }
  }
  return (
    <Background>
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          height: '91vh',
          justifyContent: 'center',
        }}
      >
        <Logo2 src={mainLogo} alt="Grow Logo" />
        <div style={{ margin: '6vh auto', flexDirection: 'row' }}>
          <span style={{ marginRight: '7vw' }}>
            <Button
              text="Sign Up"
              width="20vh"
              height="7vh"
              font="Jost Semibold"
              backgroundColor={theme.colors.beige}
              color={theme.colors.landingOrange}
              onClick={() => handleSubmit(false)}
            />
          </span>
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
      <Footer />
    </Background>
  )
}

export default Greeting
