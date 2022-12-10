import React from 'react'
import {
  Waffle,
  Row,
} from './styles'
import Logo from '../Logo'

const WaffleCard = ({ log }) => (
  <Waffle>
    <Row>
      {log.slice(0, 5).map(r => (
        <Logo
          log={r}
        />
      ))}
    </Row>
    <Row>
      {log.slice(5).map(r => (
        <Logo
          log={r}
        />
      ))}
    </Row>
  </Waffle>
)

export default WaffleCard
