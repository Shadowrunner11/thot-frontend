import { WithRouterProps } from '../types';

export function withRouter(routes: JSX.Element){
  return ({ RouterCustom }: WithRouterProps)=>(
    <RouterCustom>
      {routes}
    </RouterCustom>
  )
}
