import gql from 'graphql-tag'

export const ADDGOAL = gql`
  mutation addGoal ($userId: ID!, $goal: String!, $reward: String!, $punishment: String!, $vermin1: String!, $vermin2: String, $vermin3: String, $vermin4: String, $vermin5: String) {
    addGoal(userId: $userId, goal: $goal, reward: $reward, punishment: $punishment, vermin1: $vermin1, vermin2: $vermin2, vermin3: $vermin3, vermin4: $vermin4, vermin5: $vermin5)
  }
`

export const ADDLAW = gql`
  mutation addLaw ($userId: ID!, $law: String!, $punishment: String!, $reward: String) {
    addLaw(userId: $userId, law: $law, punishment: $punishment, reward: $reward)
  }
`

export const LAWSBYUSERID = gql`
  query lawsByUserId ($userId: ID!) {
    lawsByUserId(userId: $userId) {
      id
      userId
      law
      punishment
      reward
      createdAt
      updatedAt
    }
  }
`

export const GOALSBYUSERID = gql`
  query goalsByUserId ($userId: ID!) {
    goalsByUserId(userId: $userId) {
      id
      userId
      goal
      reward
      punishment
      vermin1
      vermin2
      vermin3
      vermin4
      vermin5
      createdAt
      updatedAt
    }
  }
`
