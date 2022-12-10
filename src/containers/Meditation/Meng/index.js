import React, { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import test from '../../../assets/test.mp3'

import Footer from '../../../components/Footer'
import ButterflyCircle from '../../../assets/ButterflyCircle.svg'
import background from '../../../assets/ButterflyPic.png'

import {
  Background, Row, Logo2, Column, SubTitle, Box3, C3, MedBox, SubTitle2,
} from './styles'
import ArrowHeader from '../../../components/ArrowHeader'

const Meng = () => {
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
            <Box3>
              <Logo2 src={ButterflyCircle} alt="Butterfly Icon" />
              <C3>夢</C3>
            </Box3>
          </Column>
          <MedBox>
            <ReactAudioPlayer
              src={test}
              autoPlay
            />
            {msg ? (
              <>
                <SubTitle2 style={{ marginBottom: '3vh' }}>Think about floating</SubTitle2>
                <SubTitle2>like a butterfly...</SubTitle2>
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

export default Meng
