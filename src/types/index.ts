import { LazyExoticComponent, MemoExoticComponent } from 'react';

export interface DefaultSuspenseProps {
  LazyElement: LazyExoticComponent<() => JSX.Element> | LazyExoticComponent<MemoExoticComponent<() => JSX.Element>>
}

export interface WithRouterProps {
  RouterCustom: (props: any) => JSX.Element
}
