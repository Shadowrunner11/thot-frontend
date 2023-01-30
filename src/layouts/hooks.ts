import { useLogin, useNotify } from 'react-admin'
import { SubmitHandler } from 'react-hook-form'

export function useCustomHandleLogin(){
  const login = useLogin()
  const notify = useNotify()
  /*
    TODO: pasar a
    useNotifyIsFormInvalid()
   */

  const _handleSubmit: SubmitHandler<any> = ({ email, password })=>{
    login({ email, password })
      .catch( error => notify(error?.message ?? 'somenthing went wrong', {
        type: 'error',
      }))
  }

  return _handleSubmit
}
