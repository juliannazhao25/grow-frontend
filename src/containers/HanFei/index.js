/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import {
  ADDGOAL,
  ADDLAW,
  LAWSBYUSERID,
  GOALSBYUSERID,
} from './graphql'
import { useGlobalContext } from '../../utils/globalContext'

import {
  Background, Row, Column, Column2, Title, Logo, EmptyText, Box, Row2, Box2, Column3,
} from './styles'
import PlusCircleBlack from '../../assets/PlusCircleBlack.svg'
import ArrowHeader from '../../components/ArrowHeader'
import Footer from '../../components/Footer'
import Goal from '../../components/Goal'
import Law from '../../components/Law'
import Button from '../../components/Button'

const HanFei = () => {
  const [data, setData] = useState()
  const { viewer } = useGlobalContext()
  const userId = viewer?.id

  const [laws, setLaws] = useState([])
  const [goals, setGoals] = useState([])
  const [lawsByUserId, { data: lawsData }] = useLazyQuery(LAWSBYUSERID, {
    onCompleted: d => {
      setLaws(d.lawsByUserId)
    },
    fetchPolicy: 'no-cache',
  })

  const [goalsByUserId, { data: goalsData }] = useLazyQuery(GOALSBYUSERID, {
    onCompleted: d => {
      setGoals(d.goalsByUserId)
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
  }, [])
  return (
    <>
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
                <Logo src={PlusCircleBlack} alt="plus" />
              </Row2>
              <Box2>
                {goals ? (<></>) : (<EmptyText>None yet! Add one.</EmptyText>)}
              </Box2>
            </Column>
            <Column2>
              <Box>
                <Title>Laws</Title>
                <Column3>
                  {laws ? (<></>) : (<EmptyText>None yet! Write one.</EmptyText>)}
                </Column3>
                <div style={{ width: 'fit-content', margin: '0 auto' }}>
                  <Button
                    text="Write"
                    width="15vh"
                    height="5vh"
                    font="Gothic A1"
                    backgroundColor="black"
                    color="white"
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
