/* eslint-disable no-console */
import graphqlProvider from 'ra-data-graphql-simple'

import { AuthProvider, RaThemeOptions } from 'react-admin'
import Apollo from './Apollo'
import { LOGIN } from '../graphql/getUser.query'


export const dataProviderGraphql = graphqlProvider({
  client: Apollo,
})


export const authProvider: AuthProvider = {
  checkAuth(params) {
    console.log(params)
    return localStorage.getItem('ssid')
      ? Promise.resolve()
      : Promise.reject();

  },
  checkError(params){
    console.log(params)

    return Promise.resolve()
  },
  getPermissions(params) {
    console.log(params)

    return Promise.resolve()
  },
  async login(params) {
    console.log('🚀 ~ file: index.ts:33 ~ login ~ params', params)
    const { data, errors } = await Apollo.mutate({
      mutation: LOGIN,
      variables:params,
    })

    console.log(errors)

    if(errors?.length) {
      throw new Error(errors?.reduce((prev, next) => prev + next.message, ''))
    }

    console.log(data)


    localStorage.setItem('ssid', data.login);

  },

  logout(params) {
    localStorage.removeItem('username');
    console.log(params)

    return Promise.resolve()
  },
}

export const darkTheme: RaThemeOptions = {
  palette: { mode: 'dark' },
};
