import { Grid, Box } from '@mui/material'
import { ToggleThemeButton, defaultTheme } from 'react-admin';

import LoginSVG from '../../assets/login.svg'
import LoginCard from '../../components/LoginCard';
import { useColorMode } from '../../hooks';
import CustomLogin from '../../layouts/CustomLogin';
import { darkTheme } from '../../lib';

import styles from './style.module.css'

export default function (){
  const imageStyle = useColorMode(undefined, styles.loginImageDark)

  return(
    <>
      <Box height={30}>
        <ToggleThemeButton
              lightTheme={defaultTheme}
              darkTheme={darkTheme}/>
      </Box>
      <Grid container height={'calc(100vh - 30px)'} alignContent={'center'}>
        <Grid item md={8} width={{ xs:0 }}>
          <img
            className={imageStyle}
            alt="two people talking"
            width={'100%'}
            src={LoginSVG}/>
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
