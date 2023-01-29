import graphqlProvider from 'ra-data-graphql-simple'

import { AuthProvider } from 'react-admin'
import Apollo from './Apollo'
import { GET_USER } from '../graphql/getUser.query'


export const dataProviderGraphql = graphqlProvider({
  client: Apollo,
})


export const authProvider: AuthProvider = {
  async login(params) {
    console.log(params)
    const user = await Apollo.query({
      query: GET_USER,
      variables:{
        id: '123',
      },
    })

    console.log(user)

    localStorage.setItem('username', params.username);
  },
  logout(params) {
    localStorage.removeItem('username');
    console.log(params)

    return Promise.resolve()
  },
  checkError(params){
    console.log(params)

    return Promise.resolve()
  },
  checkAuth(params) {
    console.log(params)
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();

  },
  getPermissions(params) {
    console.log(params)

    return Promise.resolve()
  },
}
