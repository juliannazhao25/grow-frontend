/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import Habit from '../../components/Habit'
import Footer from '../../components/Footer'
import ArrowHeader from '../../components/ArrowHeader'
import PlusCircle from '../../assets/PlusCircle.svg'
import { useGlobalContext } from '../../utils/globalContext'
import {
  Background, Title, Column, Row, Logo, EmptyText,
} from './styles'

import { ADDHABIT, HABITSBYUSERID } from './graphql'

const Kong = () => {
  const {
    viewer,
  } = useGlobalContext()
  const userId = viewer?.id
  const [data, setData] = useState([])

  //   const { data: habitsData } = useQuery(HABITSBYUSERID, {
  //     variables: {
  //       userId,
  //     },
  //     onCompleted: d => {
  //       setData(d.habitsByUserId)
  //     },
  //     fetchPolicy: 'no-cache',
  //   })

  //   const [addHabit] = useMutation(ADDHABIT, {
  //     variables: {
  //       input: {
  //         username,
  //         firstName,
  //         password,
  //       },
  //     },
  //     onCompleted: () => login(),
  //     onError: () => setErrMsg('Username taken :('),
  //   })

  const [habitsByUserId, { data: habitsData }] = useLazyQuery(HABITSBYUSERID, {
    onCompleted: d => {
      setData(d.habitsByUserId)
    },
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    habitsByUserId({
      variables: {
        userId,
      },
    })
  }, [])

  return (
    <>
      <ArrowHeader color="red" icon="water" />
      <Background>
        <div
          style={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            height: '75vh',
            justifyContent: 'center',
          }}
        >
          <Row>
            <Title>Habits</Title>
            <Logo src={PlusCircle} alt="plus" />
          </Row>
          <Column>
            {data.length !== 0 ? (
              <>
                {data.map(a => (
                  <Habit
                    habitId={a.id}
                  />
                ))}
              </>
            ) : (
              <>
                <EmptyText>None yet! Add one.</EmptyText>
              </>
            )}

          </Column>
        </div>
        <Footer />
      </Background>
    </>
  )
}

export default Kong
