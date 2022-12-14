/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Icon,
  SubContainer,
  Icon2,
  ReminderTitle,
  Line,
  Sub,
} from './styles'

import theme from '../../theme'

import Modal from '../Modal'

import ArrowRed from '../../assets/ArrowRed.svg'
import ArrowBlack from '../../assets/ArrowBlack.svg'
import ArrowBrown from '../../assets/ArrowBrown.svg'
import WaterIconBlue from '../../assets/WaterIconBlue.svg'
import ScaleIconBW from '../../assets/ScaleIconBW.svg'
import FishIconGreen from '../../assets/FishIconGreen.svg'

const ArrowHeader = ({ color, icon }) => {
  const [reminder, setReminder] = useState(false)
  const history = useHistory()

  const handleSubmit = () => {
    history.push({
      pathname: '/home',
    })
  }

  return (
    <>
      <Modal
        visible={reminder}
        closeFunc={() => setReminder(false)}
        x
        color={theme.colors.confuciusRed}
      >
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <ReminderTitle>Ritual for Coding</ReminderTitle>
          <Sub>
            <Line>Step 1: Take out mouse and keyboard</Line>
            <Line>Step 2: Elevate laptop on stand</Line>
            <Line>Step 3: Stretch neck and back</Line>
            <Line>Step 4: Start to code! :)</Line>
          </Sub>
        </div>
      </Modal>
      <Container color={color === 'red' ? '#FEFAE0' : (color === 'black' ? '#F4F4F6' : 'none')}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Icon
            src={color === 'red' ? ArrowRed : (color === 'black' ? ArrowBlack : ArrowBrown)}
            alt="Arrow"
            onClick={color === 'black' || color === 'red' || color === 'none' ? (() => handleSubmit()) : (() => {
              history.push({
                pathname: '/zhuangzi',
              })
            })}
            style={{ display: 'flex', flexDirection: 'row' }}
          />
        </div>
        <SubContainer>
          {icon === 'water' ? (<Icon2 src={WaterIconBlue} alt="Grow Logo" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }} onClick={() => setReminder(true)} />)
            : (<Icon2 src={icon === 'fish' ? FishIconGreen : ScaleIconBW} alt="Grow Logo" style={{ display: 'flex', flexDirection: 'row' }} />)}
        </SubContainer>
      </Container>
    </>
  )
}
export default ArrowHeader
