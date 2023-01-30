import { createBrowserRouter, createHashRouter, RouteObject } from 'react-router-dom'

// TODO: pasar el HOC withRouter a esto
export function createRouterByName (name: string, routes: RouteObject[]){
  switch (name){
    case 'hash':
      return createHashRouter(routes)
    case 'browser':
    default:
      return createBrowserRouter(routes)
  }
}
