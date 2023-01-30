import { Card, CardContent, CardHeader, Avatar, Grid, Box } from '@mui/material'

const tags = [
  { color: 'red' },
  { color: 'green' },
]

const Tags = () => (
  <Box display={'flex'} height={8} gap={1}>
  {tags
    .map(({ color }, index)=>
      <Box
        height={'100%'}
        key={color + index}
        width={15}
        sx={{ backgroundColor:color }}> </Box>)
  }
  </Box>
)

export default () => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe">
        R
      </Avatar>}
        title='Nombre del alumno'
        subheader={<>
          Etiquetas
          <Tags />
        </>}
      />
      <CardContent>
        <Grid container direction={'column'}>
          <Grid item xs={10}>
            Hola
          </Grid>
          <Tags />
        </Grid>
      </CardContent>
    </Card>
  )
}
