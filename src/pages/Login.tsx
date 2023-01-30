import { Grid, Box } from '@mui/material'
import { ToggleThemeButton, defaultTheme, RaThemeOptions, useTheme } from 'react-admin';

import LoginSVG from '../assets/login.svg'
import LoginCard from '../components/LoginCard';
import CustomLogin from '../layouts/CustomLogin';


const darkTheme: RaThemeOptions = {
  palette: { mode: 'dark' },
};

export default function (){
  const [{palette =  {}}] = useTheme()

  return(
    <>
      <Box height={30}>
        <ToggleThemeButton
              lightTheme={defaultTheme}
              darkTheme={darkTheme}/>
      </Box>
      <Grid container height={'calc(100vh - 30px)'} alignContent={'center'}>
        <Grid item md={8} width={{xs:0}}>
          <img style={palette.mode ==='dark'? {filter: 'invert(0.7)'} : undefined} width={'100%'} src={LoginSVG}/>
        </Grid>
        <Grid
          justifyContent={'center'} 
          alignContent={'center'}
          item 
          md={4}
          xs={12} 
          container>
        <CustomLogin login={<LoginCard />}/>
        </Grid>
      </Grid>
    </>
    
  )
}
