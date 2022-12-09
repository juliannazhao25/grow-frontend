import React from 'react'
import {
  Waffle,
  Row,
  Logo3,
} from './styles'
import FilledWaffle from '../../assets/FillWaffle.svg'
import EmptyWaffle from '../../assets/EmptyWaffle.svg'

const WaffleCard = ({ count }) => (
  <Waffle>
    <Row>
      <Logo3
        src={count >= 1 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
      <Logo3
        src={count >= 2 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
      <Logo3
        src={count >= 3 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
      <Logo3
        src={count >= 4 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
      <Logo3
        src={count >= 5 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
    </Row>
    <Row>
      <Logo3
        src={count >= 6 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
      <Logo3
        src={count >= 7 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
      <Logo3
        src={count >= 8 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
      <Logo3
        src={count >= 9 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
      <Logo3
        src={count >= 10 ? FilledWaffle : EmptyWaffle}
        alt="empty waffle box"
      />
    </Row>
  </Waffle>
)

export default WaffleCard
