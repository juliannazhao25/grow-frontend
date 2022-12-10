/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React from 'react'

import {
  Box, Category, Title, Text, Col, Row, BoldText,
} from './styles'

const Law = ({ id }) => (
  <>
    <Box>
      <Title>Law 1</Title>
      <Category>One-line description here</Category>
      <Row style={{ marginBottom: '1vh' }}>
        <BoldText>Punishment:</BoldText>
        <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
      </Row>
      <Row style={{ marginBottom: '1vh' }}>
        <BoldText>Reward:</BoldText>
        <Text style={{ marginLeft: '0.5vw' }}>Insert here</Text>
      </Row>
    </Box>
  </>
)

export default Law
