import gql from 'graphql-tag'

export const REGISTER = gql`
  mutation register ($input: RegisterInput!) {
    register (input: $input) {
      id
    }
  }
`

export const LOGIN = gql`
  mutation login ($username: String!, $password: String!) {
    login(username: $username, password: $password){
      id
    }
  }
`
