import gql from 'graphql-tag'

export const ADDHABIT = gql`
  mutation addHabit ($userId: ID!, $habit: String!, $description: String) {
    addHabit(userId: $userId, habit: $habit, description: $description)
  }
`

export const ADDHABITLOG = gql`
  mutation addHabitLog ($habitId: ID!, $date: Date!) {
    addHabitLog(habitId: $habitId, date: $date)
  }
`
