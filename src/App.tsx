import { lazy } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import Apollo from './lib/Apollo'
import { CustomRoutesApp } from './routes'
import { DefaultSuspense } from './components/DynamicImport'
import { withRouter } from './utils'

// TODOL organizar y llevar a la wiki los ejemplos

const GlobalRouter = withRouter((<Routes>
  {/* Rutas de la app de react admin (necesita login) */}
  <Route
    path='/admin/*'
    element={<DefaultSuspense LazyElement={lazy(()=> import('./pages/StorageAdmin'))} />}
  />
  {/* Rutas libres */}
  <Route path='/other/*' element={<CustomRoutesApp />}/>
</Routes>))

function App() {
  return (
    <ApolloProvider client={Apollo}>
      <GlobalRouter
        RouterCustom={ import.meta.env.PROD ? HashRouter : BrowserRouter }
      />
    </ApolloProvider>
  )
}

export default App
