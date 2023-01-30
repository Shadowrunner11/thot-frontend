import { Suspense } from 'react';
import { Loading } from 'react-admin';
import { DefaultSuspenseProps } from '../types';


export const DefaultSuspense = ({ LazyElement }: DefaultSuspenseProps) => (
  <Suspense fallback={<Loading />}>
    <LazyElement />
  </Suspense>
)
