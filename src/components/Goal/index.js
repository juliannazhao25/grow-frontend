/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React from 'react'

import {
  Box, Category, Title, Text, Col, Row,
} from './styles'

const Goal = ({ id }) => (
  <>
    <Box>
      <Title>Goal 1 Name</Title>
      <Row style={{ marginTop: '1.5vh' }}>
        <Col>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Punishment:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
          </Row>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Vermin 1:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
          </Row>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Vermin 3:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
          </Row>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Vermin 5:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
          </Row>
        </Col>
        <Col>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Reward:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
          </Row>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Vermin 2:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
          </Row>
          <Row style={{ marginBottom: '1vh' }}>
            <Category>Vermin 4:</Category>
            <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
          </Row>
        </Col>
      </Row>
    </Box>
  </>
)

export default Goal
