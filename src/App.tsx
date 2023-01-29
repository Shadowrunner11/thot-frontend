import { Admin, EditGuesser, ListGuesser, Loading, Resource } from 'react-admin'
import { useDataProvider } from './hooks'
import { authProvider } from './lib'
import { BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import { ApolloProvider } from '@apollo/client'
import Apollo from './lib/Apollo'

function App() {
  const dataProvider = useDataProvider()

  if(!dataProvider) {
    return <Loading />
  }

  return (
    <ApolloProvider client={Apollo}>
      <BrowserRouter>
        <Admin
          loginPage={Login}
          authProvider={authProvider}
          dataProvider={dataProvider}>
          <Resource name="User" list={ListGuesser} />
          <Resource name="Post" list={ListGuesser} edit={EditGuesser}/>
        </Admin>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
