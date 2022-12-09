/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
import React from 'react'
import CloseX from './CloseX.svg'
// import theme from '../../theme'
import {
  PopupModal, WhiteContainer, Body,
} from './styles'
// import Button from '../Button'

const Modal = ({
  visible, closeFunc, children, x,
}) => {
  return (
    <PopupModal
      isOpen={visible}
      onAfterOpen={() => { document.body.style.overflow = 'hidden' }}
      onAfterClose={() => { document.body.style.overflow = 'unset' }}
      appElement={document.getElementById('root') || undefined}
    >
      <WhiteContainer>
{
        x ? (
<img
  src={CloseX}
  alt="Exit button"
  style={{
    marginLeft: 'auto',
    marginRight: '0',
    width: '3vh',
  }}
  onClick={closeFunc}
/>
        ) : (<></>)
        }
        <Body>
          {children}
        </Body>
      </WhiteContainer>
    </PopupModal>
  )
}

export default Modal
