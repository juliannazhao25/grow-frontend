import React, { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import test from '../../../assets/test.mp3'

import Footer from '../../../components/Footer'
import EagleCircle from '../../../assets/EagleCircle.svg'
import background from '../../../assets/MountainPic.png'

import {
  Background, Row, Logo2, Column, SubTitle, Box1, C1, MedBox, SubTitle2,
} from './styles'
import ArrowHeader from '../../../components/ArrowHeader'

const Peng = () => {
  const [msg, setMsg] = useState(false)

  const [timeLeft, setTimeLeft] = useState(5)

  useEffect(() => {
    if (!timeLeft) setMsg(true)

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])

  return (
    <Background style={{ backgroundImage: `url(${background})` }}>
      <ArrowHeader color="#D9DD92" icon="fish" />
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '81vh',
      }}
      >
        <Row>
          <Column>
            <Box1>
              <Logo2 src={EagleCircle} alt="Eagle Icon" />
              <C1>鹏</C1>
            </Box1>
          </Column>
          <MedBox>
            <ReactAudioPlayer
              src={test}
              autoPlay
            />
            {msg ? (
              <>
                <SubTitle2 style={{ marginBottom: '3vh' }}>Think about flying</SubTitle2>
                <SubTitle2>high in the mountains...</SubTitle2>
              </>
            ) : (
              <>
                <SubTitle style={{ marginBottom: '3vh' }}>Close your eyes</SubTitle>
                <SubTitle>and take a deep breath...</SubTitle>
              </>
            )}
          </MedBox>
        </Row>
      </div>
      <Footer />
    </Background>
  )
}

export default Peng
