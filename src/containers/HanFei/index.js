
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import {
  ADDGOAL,
  ADDLAW,
  LAWSBYUSERID,
  GOALSBYUSERID,
} from './graphql'
import { useGlobalContext } from '../../utils/globalContext'

import {
  Background, Row, Column, Column2, Title, Logo, EmptyText,
  Box, Row2, Box2, Column3, Error,
} from './styles'
import {
  Body, Body2, CloseButton, LawDesc, LawDesc1, LawTitle, GoalTitle,
  GoalDesc, GoalDesc1, Main, PopupModal2, WhiteContainer,
} from '../../components/Add/styles'

import PlusCircleBlack from '../../assets/PlusCircleBlack.svg'
import ArrowHeader from '../../components/ArrowHeader'
import Footer from '../../components/Footer'
import CloseXBlack from '../../assets/CloseXBlack.svg'
import CloseXWhite from '../../assets/CloseXWhite.svg'
import Goal from '../../components/Goal'
import Law from '../../components/Law'
import Button from '../../components/Button'
import Add from '../../components/Add'
import AddInput from '../../components/AddInput'

const HanFei = () => {
  const [popup, setPopup] = useState(false)
  const [popup2, setPopup2] = useState(false)
  const [mode, setMode] = useState('')
  const [goal, setGoal] = useState('')
  const [law, setLaw] = useState('')
  const [punishment, setPunishment] = useState('')
  const [reward, setReward] = useState('')
  const [vermin1, setVermin1] = useState('')
  const [vermin2, setVermin2] = useState('')
  const [vermin3, setVermin3] = useState('')
  const [vermin4, setVermin4] = useState('')
  const [vermin5, setVermin5] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [update, setUpdate] = useState(false)
  const [data, setData] = useState()
  const { viewer } = useGlobalContext()
  const userId = viewer?.id

  const [laws, setLaws] = useState([])
  const [goals, setGoals] = useState([])
  const [lawsByUserId, { data: lawsData }] = useLazyQuery(LAWSBYUSERID, {
    onCompleted: d => {
      const result = d.lawsByUserId
      for (let i = 0; i < result.length; i++) {
        result[i].index = i + 1
      }
      setLaws(result)
    },
    fetchPolicy: 'no-cache',
  })

  const [goalsByUserId, { data: goalsData }] = useLazyQuery(GOALSBYUSERID, {
    onCompleted: d => {
      const result = d.goalsByUserId
      for (let i = 0; i < result.length; i++) {
        result[i].index = i + 1
      }
      setGoals(result)
    },
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    lawsByUserId({
      variables: {
        userId,
      },
    })
    goalsByUserId({
      variables: {
        userId,
      },
    })
  }, [update])

  const [addGoal] = useMutation(ADDGOAL, {
    variables: {
      userId,
      goal,
      reward,
      punishment,
      vermin1,
      vermin2,
      vermin3,
      vermin4,
      vermin5,
    },
    onCompleted: () => {
      setPopup2(false)
      setGoal('')
      setReward('')
      setPunishment('')
      setVermin1('')
      setVermin2('')
      setVermin3('')
      setVermin4('')
      setVermin5('')
      setErrMsg('')
      setUpdate(!update)
    },
    onError: () => setErrMsg('Cannot add goal. Please try again later.'),
  })

  const handleSubmit2 = () => {
    setErrMsg('')
    if (goal === '') {
      setErrMsg('Please enter a goal!')
    } else if (punishment === '') {
      setErrMsg('Please enter a punishment!')
    } else if (reward === '') {
      setErrMsg('Please enter a reward!')
    } else if (vermin1 === '') {
      setErrMsg('Please enter a vermin!')
    }
    if (goal !== '' && reward !== '' && punishment !== '' && vermin1 !== '') {
      addGoal()
    }
  }

  const [addLaw] = useMutation(ADDLAW, {
    variables: {
      userId,
      law,
      reward,
      punishment,
    },
    onCompleted: () => {
      setPopup(false)
      setLaw('')
      setReward('')
      setPunishment('')
      setErrMsg('')
      setUpdate(!update)
    },
    onError: () => setErrMsg('Cannot add law. Please try again later.'),
  })

  const handleSubmit = () => {
    setErrMsg('')
    if (law === '') {
      setErrMsg('Please enter a law!')
    } else if (punishment === '') {
      setErrMsg('Please enter a punishment!')
    }
    if (law !== '' && punishment !== '') {
      addLaw()
    }
  }

  return (
    <>
      <PopupModal2
        isOpen={popup2}
        onAfterOpen={() => { document.body.style.overflow = 'hidden' }}
        onAfterClose={() => { document.body.style.overflow = 'unset' }}
        appElement={document.getElementById('root') || undefined}
      >
        <Main onClick={() => {
          setPopup2(false)
          setErrMsg('')
        }}
        />
        <WhiteContainer background="white" style={{ zIndex: 200, position: 'relative' }}>
          <div
            style={{ backgroundColor: 'red' }}
            onClick={() => {
              setPopup2(false)
              setErrMsg('')
            }}
            onKeyDown={() => setPopup2(false)}
            role="button"
            tabIndex={0}
          >
            <CloseButton
              src={CloseXBlack}
              alt="Exit button"
            />
          </div>
          <Body>
            <GoalTitle>
              Add a Goal
            </GoalTitle>
            {errMsg ? <Error>{errMsg}</Error> : <></>}
            <Body2>
              <GoalDesc1>Goal</GoalDesc1>
              <AddInput
                type="text"
                outline="black"
                defaultValue={goal}
                onChange={setGoal}
                fontColor="black"
                backgroundColor="white"
              />
              <GoalDesc>Punishment</GoalDesc>
              <AddInput
                type="text"
                outline="black"
                defaultValue={punishment}
                onChange={setPunishment}
                fontColor="black"
                backgroundColor="white"
              />
              <GoalDesc>Reward</GoalDesc>
              <AddInput
                type="text"
                outline="black"
                defaultValue={reward}
                onChange={setReward}
                fontColor="black"
                backgroundColor="white"
              />
              <GoalDesc>Vermin 1</GoalDesc>
              <AddInput
                type="text"
                outline="black"
                defaultValue={vermin1}
                onChange={setVermin1}
                fontColor="black"
                backgroundColor="white"
              />
              <GoalDesc>Vermin 2 (Optional)</GoalDesc>
              <AddInput
                type="text"
                outline="black"
                defaultValue={vermin2}
                onChange={setVermin2}
                fontColor="black"
                backgroundColor="white"
              />
              <GoalDesc>Vermin 3 (Optional)</GoalDesc>
              <AddInput
                type="text"
                outline="black"
                defaultValue={vermin3}
                onChange={setVermin3}
                fontColor="black"
                backgroundColor="white"
              />
              <GoalDesc>Vermin 4 (Optional)</GoalDesc>
              <AddInput
                type="text"
                outline="black"
                defaultValue={vermin4}
                onChange={setVermin4}
                fontColor="black"
                backgroundColor="white"
              />
              <GoalDesc>Vermin 5 (Optional)</GoalDesc>
              <AddInput
                type="text"
                outline="black"
                defaultValue={vermin5}
                onChange={setVermin5}
                fontColor="black"
                backgroundColor="white"
              />
            </Body2>
            <div style={{ width: 'fit-content', margin: '3vh auto' }}>
              <Button
                text="Add"
                width="15vh"
                height="5vh"
                font="Gothic A1"
                backgroundColor="black"
                color="white"
                onClick={handleSubmit2}
              />
            </div>
          </Body>
        </WhiteContainer>
      </PopupModal2>
      <PopupModal2
        isOpen={popup}
        onAfterOpen={() => { document.body.style.overflow = 'hidden' }}
        onAfterClose={() => { document.body.style.overflow = 'unset' }}
        appElement={document.getElementById('root') || undefined}
      >
        <Main onClick={() => {
          setPopup(false)
          setErrMsg('')
        }}
        />
        <WhiteContainer background="black" style={{ zIndex: 200, position: 'relative' }}>
          <div
            style={{ backgroundColor: 'red' }}
            onClick={() => {
              setPopup(false)
              setErrMsg('')
            }}
            onKeyDown={() => {
              setPopup(false)
              setErrMsg('')
            }}
            role="button"
            tabIndex={0}
          >
            <CloseButton
              src={CloseXWhite}
              alt="Exit button"
            />
          </div>
          <Body>
            <Body2>
              <LawTitle>
                Write a Law
              </LawTitle>
              {errMsg ? <Error>{errMsg}</Error> : <></>}
              <LawDesc1>Law</LawDesc1>
              <AddInput
                type="text"
                outline="white"
                defaultValue={law}
                onChange={setLaw}
                fontColor="white"
                backgroundColor="black"
              />
              <LawDesc>Punishment</LawDesc>
              <AddInput
                type="text"
                outline="white"
                defaultValue={punishment}
                onChange={setPunishment}
                fontColor="white"
                backgroundColor="black"
              />
              <LawDesc>Reward (Optional)</LawDesc>
              <AddInput
                type="text"
                outline="white"
                defaultValue={reward}
                onChange={setReward}
                fontColor="white"
                backgroundColor="black"
              />
            </Body2>
            <div style={{ width: 'fit-content', margin: '3vh auto' }}>
              <Button
                text="Write"
                width="15vh"
                height="5vh"
                font="Gothic A1"
                backgroundColor="white"
                color="black"
                onClick={handleSubmit}
              />
            </div>
          </Body>
        </WhiteContainer>
      </PopupModal2>
      <PopupModal2
        isOpen={popup}
        onAfterOpen={() => { document.body.style.overflow = 'hidden' }}
        onAfterClose={() => { document.body.style.overflow = 'unset' }}
        appElement={document.getElementById('root') || undefined}
      >
        <Main onClick={() => {
          setPopup(false)
          setErrMsg('')
        }}
        />
        <WhiteContainer background="black" style={{ zIndex: 200, position: 'relative' }}>
          <div
            style={{ backgroundColor: 'red' }}
            onClick={() => {
              setPopup(false)
              setErrMsg('')
            }}
            onKeyDown={() => {
              setPopup(false)
              setErrMsg('')
            }}
            role="button"
            tabIndex={0}
          >
            <CloseButton
              src={CloseXWhite}
              alt="Exit button"
            />
          </div>
          <Body>
            <Body2>
              <LawTitle>
                Write a Law
              </LawTitle>
              {errMsg ? <Error>{errMsg}</Error> : <></>}
              <LawDesc1>Law</LawDesc1>
              <AddInput
                type="text"
                outline="white"
                defaultValue={law}
                onChange={setLaw}
                fontColor="white"
                backgroundColor="black"
              />
              <LawDesc>Punishment</LawDesc>
              <AddInput
                type="text"
                outline="white"
                defaultValue={punishment}
                onChange={setPunishment}
                fontColor="white"
                backgroundColor="black"
              />
              <LawDesc>Reward (Optional)</LawDesc>
              <AddInput
                type="text"
                outline="white"
                defaultValue={reward}
                onChange={setReward}
                fontColor="white"
                backgroundColor="black"
              />
            </Body2>
            <div style={{ width: 'fit-content', margin: '3vh auto' }}>
              <Button
                text="Write"
                width="15vh"
                height="5vh"
                font="Gothic A1"
                backgroundColor="white"
                color="black"
                onClick={handleSubmit}
              />
            </div>
          </Body>
        </WhiteContainer>
      </PopupModal2>
      <ArrowHeader color="black" icon="scale" />
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
            <Column>
              <Row2>
                <Title>Goals</Title>
                <Logo
                  src={PlusCircleBlack}
                  alt="plus"
                  onClick={() => {
                    setPopup2(true)
                    setErrMsg('')
                  }}
                />
              </Row2>
              <Box2>
                {goals.length !== 0 ? (
                  <>
                    {goals.map(a => (
                      <Goal
                        index={a.index}
                        goal={a.goal}
                        punishment={a.punishment}
                        reward={a.reward}
                        vermin1={a.vermin1}
                        vermin2={a.vermin2}
                        vermin3={a.vermin3}
                        vermin4={a.vermin4}
                        vermin5={a.vermin5}
                      />
                    ))}
                  </>
                ) : (<EmptyText>None yet! Add one.</EmptyText>)}
              </Box2>
            </Column>
            <Column2>
              <Box>
                <Title>Laws</Title>
                <Column3>
                  {laws.length !== 0 ? (
                    <>
                      {laws.map(a => (
                        <Law
                          index={a.index}
                          law={a.law}
                          punishment={a.punishment}
                          reward={a.reward}
                        />
                      ))}
                    </>
                  ) : (<EmptyText>None yet! Write one.</EmptyText>)}
                </Column3>
                <div style={{ width: 'fit-content', margin: '0 auto' }}>
                  <Button
                    text="Write"
                    width="15vh"
                    height="5vh"
                    font="Gothic A1"
                    backgroundColor="black"
                    color="white"
                    onClick={() => {
                      setPopup(true)
                      setErrMsg('')
                    }}
                  />
                </div>
              </Box>
            </Column2>
          </Row>
        </div>
        <Footer />
      </Background>
    </>
  )
}


export default HanFei
