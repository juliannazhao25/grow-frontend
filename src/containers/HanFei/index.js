/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import {
  ADDGOAL,
  ADDLAW,
  LAWSBYUSERID,
  GOALSBYUSERID,
} from './graphql'
import { useGlobalContext } from '../../utils/globalContext'

const HanFei = () => {
  const { viewer } = useGlobalContext()
  const userId = viewer?.id

  const [laws, setLaws] = useState([])
  const [goals, setGoals] = useState([])
  const [lawsByUserId, { data: lawsData }] = useLazyQuery(LAWSBYUSERID, {
    onCompleted: d => {
      setLaws(d.lawsByUserId)
    },
    fetchPolicy: 'no-cache',
  })

  const [goalsByUserId, { data: goalsData }] = useLazyQuery(GOALSBYUSERID, {
    onCompleted: d => {
      setGoals(d.goalsByUserId)
    },
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    lawsByUserId({
      variables: {
        userId,
      },
    })
    goalsByUserId({
      variables: {
        userId,
      },
    })
  }, [])
  return (<div>Goals and laws list</div>)
}


export default HanFei
