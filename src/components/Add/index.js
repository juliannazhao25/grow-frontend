/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import CloseXBlack from '../../assets/CloseXBlack.svg'
import CloseXWhite from '../../assets/CloseXWhite.svg'
import AddInput from '../AddInput'
import Button from '../Button'
import CloseX from '../Modal/CloseX.svg'
import {
  PopupModal2,
  WhiteContainer,
  Body,
  Main,
  CloseButton,
  LawTitle,
  HabitTitle,
  GoalTitle,
  LawDesc,
  HabitDesc,
  GoalDesc,
  Container,
  HabitDesc1,
  GoalDesc1,
  LawDesc1,
  Body2,
  Body3,
} from './styles'

const Add = ({ visible, close, use }) => {
  const [habit, setHabit] = useState('')
  const [desc, setDesc] = useState('')

  const [goal, setGoal] = useState('')
  const [law, setLaw] = useState('')
  const [punishment, setPunishment] = useState('')
  const [reward, setReward] = useState('')
  const [vermin1, setVermin1] = useState('')
  const [vermin2, setVermin2] = useState('')
  const [vermin3, setVermin3] = useState('')
  const [vermin4, setVermin4] = useState('')
  const [vermin5, setVermin5] = useState('')

  return (
    <PopupModal2
      isOpen={visible}
      onAfterOpen={() => { document.body.style.overflow = 'hidden' }}
      onAfterClose={() => { document.body.style.overflow = 'unset' }}
      appElement={document.getElementById('root') || undefined}
    >
      <Main onClick={close} />
      <WhiteContainer background={use === 'law' ? 'black' : (use === 'goal' ? ('white') : ('#AA280E'))} style={{ zIndex: 200, position: 'relative' }}>
        <div style={{ backgroundColor: 'red' }} onClick={close} onKeyDown={close} role="button" tabIndex={0}>
          <CloseButton
            src={use === 'law' ? (CloseXWhite) : (use === 'goal' ? (CloseXBlack) : (CloseX))}
            alt="Exit button"
          />
        </div>
        <Body>
          {
            use === 'law' ? (
              <>
                <Body2>
                  <LawTitle>
                    Write a Law
                  </LawTitle>
                  <LawDesc1>Law</LawDesc1>
                  <AddInput
                    type="text"
                    outline="white"
                    defaultValue={law}
                    onChange={setLaw}
                    fontColor="white"
                    backgroundColor="black"
                  />
                  <LawDesc>Punishment</LawDesc>
                  <AddInput
                    type="text"
                    outline="white"
                    defaultValue={punishment}
                    onChange={setPunishment}
                    fontColor="white"
                    backgroundColor="black"
                  />
                  <LawDesc>Reward (Optional)</LawDesc>
                  <AddInput
                    type="text"
                    outline="white"
                    defaultValue={reward}
                    onChange={setReward}
                    fontColor="white"
                    backgroundColor="black"
                  />
                </Body2>
                <div style={{ width: 'fit-content', margin: '3vh auto' }}>
                  <Button
                    text="Write"
                    width="15vh"
                    height="5vh"
                    font="Gothic A1"
                    backgroundColor="white"
                    color="black"
                  />
                </div>
              </>
            ) : (use === 'goal' ? (
              <>
                <GoalTitle>
                  Add a Goal
                </GoalTitle>
                <Body2>
                  <GoalDesc1>Goal</GoalDesc1>
                  <AddInput
                    type="text"
                    outline="black"
                    defaultValue={goal}
                    onChange={setGoal}
                    fontColor="black"
                    backgroundColor="white"
                  />
                  <GoalDesc>Punishment</GoalDesc>
                  <AddInput
                    type="text"
                    outline="black"
                    defaultValue={punishment}
                    onChange={setPunishment}
                    fontColor="black"
                    backgroundColor="white"
                  />
                  <GoalDesc>Reward (Optional)</GoalDesc>
                  <AddInput
                    type="text"
                    outline="black"
                    defaultValue={reward}
                    onChange={setReward}
                    fontColor="black"
                    backgroundColor="white"
                  />
                  <GoalDesc>Vermin 1</GoalDesc>
                  <AddInput
                    type="text"
                    outline="black"
                    defaultValue={vermin1}
                    onChange={setVermin1}
                    fontColor="black"
                    backgroundColor="white"
                  />
                  <GoalDesc>Vermin 2 (Optional)</GoalDesc>
                  <AddInput
                    type="text"
                    outline="black"
                    defaultValue={vermin2}
                    onChange={setVermin2}
                    fontColor="black"
                    backgroundColor="white"
                  />
                  <GoalDesc>Vermin 3 (Optional)</GoalDesc>
                  <AddInput
                    type="text"
                    outline="black"
                    defaultValue={vermin3}
                    onChange={setVermin3}
                    fontColor="black"
                    backgroundColor="white"
                  />
                  <GoalDesc>Vermin 4 (Optional)</GoalDesc>
                  <AddInput
                    type="text"
                    outline="black"
                    defaultValue={vermin4}
                    onChange={setVermin4}
                    fontColor="black"
                    backgroundColor="white"
                  />
                  <GoalDesc>Vermin 5 (Optional)</GoalDesc>
                  <AddInput
                    type="text"
                    outline="black"
                    defaultValue={vermin5}
                    onChange={setVermin5}
                    fontColor="black"
                    backgroundColor="white"
                  />
                </Body2>
                <div style={{ width: 'fit-content', margin: '3vh auto' }}>
                  <Button
                    text="Add"
                    width="15vh"
                    height="5vh"
                    font="Gothic A1"
                    backgroundColor="black"
                    color="white"
                  />
                </div>
              </>
            ) : (
              <>
                <Body3>
                  <HabitTitle>
                    Add a Habit
                  </HabitTitle>
                  <HabitDesc1>Habit</HabitDesc1>
                  <AddInput
                    type="text"
                    outline="#FEFAE0"
                    defaultValue={habit}
                    onChange={setHabit}
                    fontColor="white"
                    backgroundColor="#AA280E"
                  />
                  <HabitDesc>Short Description</HabitDesc>
                  <AddInput
                    type="text"
                    outline="#FEFAE0"
                    defaultValue={desc}
                    onChange={setDesc}
                    fontColor="#FEFAE0"
                    backgroundColor="#AA280E"
                  />
                </Body3>
                <div style={{ width: 'fit-content', margin: '1vh auto' }}>
                  <Button
                    text="Done"
                    width="15vh"
                    height="5vh"
                    font="Roboto"
                    backgroundColor="#FEFAE0"
                    color="#AA280E"
                  />
                </div>
              </>
            ))
          }
        </Body>
      </WhiteContainer>
    </PopupModal2>
  )
}

export default Add
