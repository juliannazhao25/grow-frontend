import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import Footer from '../../components/Footer'
import WaterIcon from '../../assets/WaterIcon.svg'
import ScaleIcon from '../../assets/ScaleIcon.svg'
import FishIcon from '../../assets/FishIcon.svg'

import {
  Background, Title, Row, Logo2, Column,
} from './styles'
import LoginHeader from '../../components/LogInHeader'

const Home = () => {
  const history = useHistory()

  return (
    <Background>
      <LoginHeader />
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '81vh',
      }}
      >
        <Title>Today I&apos;m feeling...</Title>
        <Row>
          <Column>
            <Logo2 src={WaterIcon} alt="Water Icon" />
            <div style={{ display: 'flex', margin: '4vh auto', width: 'fit-content' }}>
              <Button
                text="Confucius"
                width="18vh"
                height="7vh"
                font="Jost Semibold"
                backgroundColor="#D4A373"
                color="#F5DFCD"
                onClick={() => history.push({
                  pathname: '/confucius',
                })}
              />
            </div>
          </Column>
          <Column>
            <Logo2 src={ScaleIcon} alt="Scale Icon" />
            <div style={{ display: 'flex', margin: '4vh auto', width: 'fit-content' }}>
              <Button
                text="Han Feizi"
                width="18vh"
                height="7vh"
                font="Jost Semibold"
                backgroundColor="#FAEDCD"
                color="#D4A373"
                onClick={() => history.push({
                  pathname: '/hanfeizi',
                })}
              />
            </div>
          </Column>
          <Column>
            <Logo2 src={FishIcon} alt="Fish Icon" />
            <div style={{ display: 'flex', margin: '4vh auto', width: 'fit-content' }}>
              <Button
                text="Zhuangzi"
                width="18vh"
                height="7vh"
                font="Jost Semibold"
                backgroundColor="#CCD5AE"
                color="#FCF7D9"
                onClick={() => history.push({
                  pathname: '/zhuangzi',
                })}
              />
            </div>
          </Column>
        </Row>
      </div>
      <Footer />
    </Background>
  )
}

export default Home
