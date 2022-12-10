import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import Footer from '../../components/Footer'
import EagleCircle from '../../assets/EagleCircle.svg'
import FishCircle from '../../assets/FishCircle.svg'
import ButterflyCircle from '../../assets/ButterflyCircle.svg'
import background from '../../assets/DreamPainting.svg'

import {
  Background, Title, Row, Logo2, Column, SubTitle, Box1, Box3, Box2, C1, C2, C3,
} from './styles'
import ArrowHeader from '../../components/ArrowHeader'

const Zhuangzi = () => {
  const history = useHistory()

  const getRandomInt = () => Math.floor(Math.random() * 3)

  const handleSubmit = num => {
    if (num === 0) {
      history.push({
        pathname: '/peng',
      })
    } else if (num === 1) {
      history.push({
        pathname: '/kun',
      })
    } else {
      history.push({
        pathname: '/meng',
      })
    }
  }
  return (
    <Background style={{ backgroundImage: `url(${background})` }}>
      <ArrowHeader color="none" icon="fish" />
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '81vh',
      }}
      >
        <Title>Today&apos;s meditation...</Title>
        <Row>
          <Column>
            <Box1>
              <Logo2 src={EagleCircle} alt="Eagle Icon" />
              <C1>鹏</C1>
            </Box1>
          </Column>
          <Column>
            <Box2>
              <Logo2 src={FishCircle} alt="Fish Icon" />
              <C2>鲲</C2>
            </Box2>
          </Column>
          <Column>
            <Box3>
              <Logo2 src={ButterflyCircle} alt="Butterfly Icon" />
              <C3>夢</C3>
            </Box3>
          </Column>
        </Row>
        <div style={{
          display: 'flex', flexDirection: 'column', margin: '4vh auto', width: 'fit-content',
        }}
        >
          <SubTitle>(randomly chosen)</SubTitle>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', margin: '0vh auto 4vh auto', width: 'fit-content',
        }}
        >

          <Button
            text="Generate"
            width="18vh"
            height="7vh"
            font="Familjen Grotesk Bold"
            backgroundColor="#EABE7C"
            color="#87775E"
            onClick={() => handleSubmit(getRandomInt())}
          />
        </div>
      </div>
      <Footer />
    </Background>
  )
}

export default Zhuangzi
