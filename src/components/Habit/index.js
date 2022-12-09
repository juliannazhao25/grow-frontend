/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import WaffleCard from '../Waffle'
import ProgressBar from '../ProgressBarNew'
import Check from '../../assets/Check.svg'

import {
  Column2, Entry, BizTitle, BizSubTitle, Streak, Row, Logo2, Logged,
} from './styles'

const Habit = ({ id }) => {
  const complete = count => (count / 8) * 100
  const [streak, setStreak] = useState(20)
  const [check, setCheck] = useState(true)

  return (
    <>
      <Entry>
        <WaffleCard count={2} />
        <Column2>
          <BizTitle>
            Habit Name Here
          </BizTitle>
          <BizSubTitle>
            Habit description here
          </BizSubTitle>
          <Row>
            <ProgressBar completed={9} number={2} />
            {check ? (<Logo2 src={Check} alt="Check" onClick={() => setCheck(false)} />) : (<Logged>Done!</Logged>)}
          </Row>
          {streak ? (
            <>
              <Streak>
                🔥
                {' '}
                {streak}
                -day streak!
              </Streak>
            </>
          ) : (<></>)}
        </Column2>
      </Entry>
    </>
  )
}

export default Habit
