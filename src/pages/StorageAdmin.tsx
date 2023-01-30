import { lazy, memo } from 'react'
import { Admin, CustomRoutes, EditGuesser, ListGuesser, Loading, Resource } from 'react-admin'
import { Route } from 'react-router-dom'
import { DefaultSuspense } from '../components/DynamicImport'
import { useDataProvider } from '../hooks'
import { authProvider } from '../lib'
import { CustomRoutesApp } from '../routes'
import Login from './Login'

export default memo(() => {
  const dataProvider = useDataProvider()

  if(!dataProvider) {
    return <Loading />
  }

  return (
    <Admin
      basename='/admin'
      loginPage={Login}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="User"
        list={
          <DefaultSuspense LazyElement={lazy(()=> import('../components/UserList'))} />
        }
      />
      <Resource
        name="Post"
        list={ListGuesser}
        edit={EditGuesser}
      />
      <CustomRoutes>
        <Route path='/other/*' element={<CustomRoutesApp />}/>
      </CustomRoutes>
    </Admin>
  )
})
