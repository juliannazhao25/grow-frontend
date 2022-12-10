/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import WaffleCard from '../Waffle'
import ProgressBar from '../ProgressBarNew'
import Check from '../../assets/Check.svg'
import { LOGBYHABITID, ADDHABITLOG } from './graphql'
import {
  Column2, Entry, BizTitle, BizSubTitle, Streak, Row, Logo2, Logged,
} from './styles'

const Habit = ({ habitId }) => {
  const today = new Date()
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  const complete = count => (count / 8) * 100
  const [streak, setStreak] = useState(20)
  const [check, setCheck] = useState(true)
  const [data, setData] = useState([])
  const [log, setLog] = useState([])
  const { data: habitsData } = useQuery(LOGBYHABITID, {
    variables: {
      habitId,
    },
    onCompleted: d => {
      setData(d.logByHabitId)
      setLog(d.logByHabitId.lastMonth.reverse().slice(20))
      setCheck(!d.logByHabitId.doneToday)
    },
    fetchPolicy: 'no-cache',
  })

  const [addHabitLog] = useMutation(ADDHABITLOG, {
    variables:
    {
      habitId,
      date: '2022-12-09',
    },
    onCompleted: () => {
      setCheck(false)
    },
  })

  return (
    <>
      <Entry>
        <WaffleCard log={log} />
        <Column2>
          <BizTitle>
            {data.habit}
          </BizTitle>
          <BizSubTitle>
            {data.description}
          </BizSubTitle>
          <Row>
            <ProgressBar completed={complete(data.successDays)} number={data.successDays} />
            {check ? (<Logo2 src={Check} alt="Check" onClick={() => addHabitLog()} />) : (<Logged>Done!</Logged>)}
          </Row>
          {data.streak ? (
            <>
              <Streak>
                🔥
                {' '}
                {data.streak}
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
