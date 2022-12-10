import gql from 'graphql-tag'

export const ADDHABITLOG = gql`
  mutation addHabitLog ($habitId: ID!, $date: Date!) {
    addHabitLog(habitId: $habitId, date: $date)
  }
`

export const LOGBYHABITID = gql`
  query logByHabitId ($habitId: ID!) {
    logByHabitId(habitId: $habitId) {
        habitId
        habit
        description
        doneToday
        totalDays
        successDays
        streak
        lastMonth {
          date
          completed
        }
    }
  }
`
