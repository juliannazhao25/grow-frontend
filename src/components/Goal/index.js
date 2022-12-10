/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React from 'react'

import {
  Box, Category, Title, Text, Col, Row,
} from './styles'

const Goal = ({
  goal,
  reward,
  punishment,
  vermin1,
  vermin2,
  vermin3,
  vermin4,
  vermin5,
}) => (
  <>
    <Box>
      <Title>{goal}</Title>
      <Row style={{ marginTop: '1.5vh' }}>
        <Col>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Punishment:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>{punishment}</Text>
          </Row>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Vermin 1:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>{vermin1}</Text>
          </Row>
          {vermin3 ? (
            <Row style={{ marginBottom: '1vh' }}>
              <Category>Vermin 3:</Category>
              <Text style={{ marginLeft: '0.5vw' }}>{vermin3}</Text>
            </Row>
          ) : <></>}
          {vermin5 ? (
            <Row style={{ marginBottom: '1vh' }}>
              <Category>Vermin 5:</Category>
              <Text style={{ marginLeft: '0.5vw' }}>{vermin4}</Text>
            </Row>
          ) : <></>}
        </Col>
        <Col>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Reward:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>{reward}</Text>
          </Row>
          {vermin2 ? (
            <Row style={{ marginBottom: '1vh' }}>
              <Category>Vermin 2:</Category>
              <Text style={{ marginLeft: '0.5vw' }}>{vermin2}</Text>
            </Row>
          ) : <></>}
          {vermin4 ? (
            <Row style={{ marginBottom: '1vh' }}>
              <Category>Vermin 4:</Category>
              <Text style={{ marginLeft: '0.5vw' }}>{vermin5}</Text>
            </Row>
          ) : <></>}
        </Col>
      </Row>
    </Box>
  </>
)

export default Goal
