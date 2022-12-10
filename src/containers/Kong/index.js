/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import Habit from '../../components/Habit'
import Footer from '../../components/Footer'
import ArrowHeader from '../../components/ArrowHeader'
import PlusCircle from '../../assets/PlusCircle.svg'
import CloseX from '../../components/Modal/CloseX.svg'
import { useGlobalContext } from '../../utils/globalContext'
import {
  Background, Title, Column, Row, Logo, EmptyText,
} from './styles'

import { ADDHABIT, HABITSBYUSERID } from './graphql'
import Button from '../../components/Button'
import AddInput from '../../components/AddInput'
import {
  Body, Body3, CloseButton, HabitDesc, HabitDesc1, HabitTitle, Main, PopupModal2, WhiteContainer,
} from '../../components/Add/styles'

const Kong = () => {
  const {
    viewer,
  } = useGlobalContext()
  const userId = viewer?.id
  const [data, setData] = useState([])
  const [habit, setHabit] = useState('')
  const [desc, setDesc] = useState('')
  const [popup, setPopup] = useState(false)

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
      <PopupModal2
        isOpen={popup}
        onAfterOpen={() => { document.body.style.overflow = 'hidden' }}
        onAfterClose={() => { document.body.style.overflow = 'unset' }}
        appElement={document.getElementById('root') || undefined}
      >
        <Main onClick={() => setPopup(false)} />
        <WhiteContainer background="#AA280E" style={{ zIndex: 200, position: 'relative' }}>
          <div style={{ backgroundColor: 'red' }} onClick={() => setPopup(false)} onKeyDown={() => setPopup(false)} role="button" tabIndex={0}>
            <CloseButton
              src={CloseX}
              alt="Exit button"
            />
          </div>
          <Body>
            <Body3>
              <HabitTitle>
                Add a Habit
              </HabitTitle>
              <HabitDesc1>Habit</HabitDesc1>
              <AddInput
                type="text"
                outline="#FEFAE0"
                defaultValue={habit}
                onChange={setHabit}
                fontColor="white"
                backgroundColor="#AA280E"
              />
              <HabitDesc>Short Description</HabitDesc>
              <AddInput
                type="text"
                outline="#FEFAE0"
                defaultValue={desc}
                onChange={setDesc}
                fontColor="#FEFAE0"
                backgroundColor="#AA280E"
              />
            </Body3>
            <div style={{ width: 'fit-content', margin: '1vh auto' }}>
              <Button
                text="Done"
                width="15vh"
                height="5vh"
                font="Roboto"
                backgroundColor="#FEFAE0"
                color="#AA280E"
              />
            </div>
          </Body>
        </WhiteContainer>
      </PopupModal2>
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
            <Logo src={PlusCircle} alt="plus" onClick={() => setPopup(true)} />
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
