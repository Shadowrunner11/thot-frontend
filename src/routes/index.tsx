import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom'
import { DefaultSuspense } from '../components/DynamicImport';

export const routes: RouteObject[] = [
  {
    element: <DefaultSuspense LazyElement={lazy(() => import ('../pages/Kamban'))} />,
    path: '/kamban',
  },
]

export function CustomRoutesApp(){
  const customRoutes = useRoutes(routes)
  return customRoutes
}
