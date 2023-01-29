import { Form, TextInput, useLogin } from 'react-admin';
import { Button, Grid } from '@mui/material'
import { SubmitHandler } from 'react-hook-form';

function useCustomLogin(){
  const login = useLogin()

  const _handleSubmit: SubmitHandler<any> = ({email, password})=>{
    login({email, password})
      .catch(console.log)
  }

  return _handleSubmit
}

export default function (){
  const _handleSubmit = useCustomLogin()

  return(
    <Form onSubmit={_handleSubmit}>
      <Grid direction='column' container>
        <TextInput source='username'/>
        <TextInput source='password'/>
        <Button type="submit" variant='contained'>Login</Button>
      </Grid>
    </Form>
  )
}
