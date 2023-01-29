import { gql } from '@apollo/client'

export const GET_USER = gql`query getUSer ($id: ID!) {
  User (id: $id) {
   name
  }
}
`
