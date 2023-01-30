import { memo } from 'react';
import { Form } from 'react-admin';
import { useCustomHandleLogin } from './hooks';

interface CustomLoginProps {
  login: JSX.Element
}

export default memo(({ login }: CustomLoginProps)=>{
  const _handleSubmit = useCustomHandleLogin()

  return (
    <Form onSubmit={_handleSubmit}>
      {login}
    </Form>
  )
})
