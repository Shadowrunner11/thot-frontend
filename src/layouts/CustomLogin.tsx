import { memo } from 'react';
import { Form, useLogin } from 'react-admin';
import { SubmitHandler } from 'react-hook-form';

interface CustomLoginProps {
  login: JSX.Element
}

function useCustomHandleLogin(){
  const login = useLogin()

  const _handleSubmit: SubmitHandler<any> = ({email, password})=>{
    login({ email, password })
      .catch(console.error)
  }

  return _handleSubmit
}

export default memo( ({login}: CustomLoginProps)=>{
  const _handleSubmit = useCustomHandleLogin()

  return (
    <Form onSubmit={_handleSubmit}>
      {login}
    </Form>
  )
})
