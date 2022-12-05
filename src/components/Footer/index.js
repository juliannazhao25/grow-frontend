import React from 'react'

import circleLogo from '../../assets/circleLogo.svg'

import {
  Container, Logo1, ReactTooltipStyled,
} from './styles'

const Footer = () => (
  <Container>
    <div style={{ width: 'fit-content', height: '6vh' }}>
      <p data-tip="Julianna Zhao & Nadine Han's<br />GenEd 1175 Final Project"><Logo1 src={circleLogo} alt="Grow Logo" /></p>
      <ReactTooltipStyled backgroundColor="#939D73" textColor="#F2EDCB" multiline place="left" type="success" />
    </div>
  </Container>
)

export default Footer
