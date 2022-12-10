import React from 'react'
import {
  Logo3,
  ReactTooltipStyled,
} from './styles'
import FilledWaffle from '../../assets/FillWaffle.svg'
import EmptyWaffle from '../../assets/EmptyWaffle.svg'

const Logo = ({ log }) => (
  <>
    <p data-tip={log.date.substring(5)}>
      <Logo3
        src={log.completed === false ? EmptyWaffle : FilledWaffle}
        alt="waffle box"
      />
    </p>
    <ReactTooltipStyled backgroundColor="#939D73" textColor="#F2EDCB" multiline place="left" type="success" />
  </>

)

export default Logo
