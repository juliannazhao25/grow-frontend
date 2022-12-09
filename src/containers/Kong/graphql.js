import gql from 'graphql-tag'

export const ADDHABIT = gql`
  mutation addHabit ($userId: ID!, $habit: String!, $description: String) {
    addHabit(userId: $userId, habit: $habit, description: $description)
  }
`

export const HABITSBYUSERID = gql`
  query habitsByUserId ($userId: ID!) {
    habitsByUserId(userId: $userId) {
      id
      userId
      habit
      description
    }
  }
`
