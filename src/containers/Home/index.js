import React from 'react'
import Button from '../../components/Button'
import mainLogo from '../../assets/mainLogo.svg'
import { Background, Logo2 } from '../Greeting/styles'
import theme from '../../theme'
import { useGlobalContext } from '../../utils/globalContext'

const Home = () => {
  const {
    logout,
  } = useGlobalContext()
  return (
    <Background>
      <div style={{ backgroundColor: 'red', width: '100vw' }}>
        <Logo2 src={mainLogo} alt="Grow Logo" />
      </div>
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ margin: '0 auto' }}>
          <span style={{ marginLeft: 20, marginRight: 10 }}>
            <Button
              text="Sign Up"
              width="15vh"
              height="5.5vh"
              font="Jost Semibold"
              backgroundColor={theme.colors.beige}
              color={theme.colors.landingOrange}
            />
          </span>
          <Button
            text="Log Out"
            width="15vh"
            height="5.5vh"
            font="Jost Semibold"
            backgroundColor={theme.colors.beige}
            color={theme.colors.landingOrange}
            onClick={logout}
          />
        </div>
      </div>
    </Background>
  )
}

export default Home
