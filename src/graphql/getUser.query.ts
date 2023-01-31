import { gql } from '@apollo/client'

export const GET_USER = gql`query getUSer ($id: ID!) {
  User (id: $id) {
   name
  }
}
`
export const LOGIN = gql`
  mutation login ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`
