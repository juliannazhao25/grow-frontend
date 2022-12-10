/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React from 'react'

import {
  Box, Category, Title, Text, Col, Row, BoldText,
} from './styles'

const Law = ({
  index, law, punishment, reward,
}) => (
  <>
    <Box>
      <Title>
        Law
        {' '}
        {index}
      </Title>
      <Category>{law}</Category>
      <Row style={{ marginBottom: '1vh' }}>
        <BoldText>Punishment:</BoldText>
        <Text style={{ marginLeft: '0.5vw' }}>{punishment}</Text>
      </Row>
      <Row style={{ marginBottom: '1vh' }}>
        <BoldText>Reward:</BoldText>
        <Text style={{ marginLeft: '0.5vw' }}>{reward}</Text>
      </Row>
    </Box>
  </>
)

export default Law
