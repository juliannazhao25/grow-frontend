import React from 'react'
import {
  Waffle,
  Row,
  Logo3,
} from './styles'
import EmptyWaffle from '../../assets/EmptyWaffle.svg'

const EmptyWaffleCard = () => (
  <Waffle>
    <Row>
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
    </Row>
    <Row>
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
      <Logo3
        src={EmptyWaffle}
        alt="waffle box"
      />
    </Row>
  </Waffle>
)

export default EmptyWaffleCard
