/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import Habit from '../../components/Habit'
import Footer from '../../components/Footer'
import ArrowHeader from '../../components/ArrowHeader'

import PlusCircle from '../../assets/PlusCircle.svg'

import {
  Background, Title, Column, Row, Logo, EmptyText,
} from './styles'

const Kong = () => {
  const [data, setData] = useState('hi')
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
            {data ? (
              <>
                <Habit />
                <Habit />
                <Habit />
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
