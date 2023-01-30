import { Button, Grid, Card, CardContent } from '@mui/material'
import { TextInput } from 'react-admin';

export default () => (
  <Card>
    <CardContent>
      <Grid direction='column' container>
        <TextInput source='username'/>
        <TextInput source='password'/>
        <Button type="submit" variant='contained'>Login</Button>
      </Grid>
    </CardContent>
  </Card>
)
