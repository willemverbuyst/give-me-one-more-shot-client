import { Grid, Typography } from '@mui/material'
import './App.css'
import Signup from './signup'

function App() {
  return (
    <Grid container spacing={2} columns={12}>
      <Grid xs={12} textAlign="center">
        <Typography variant="h1">Give me one more shot</Typography>
      </Grid>
      <Grid xs={12} display="flex" justifyContent="center">
        <Signup />
      </Grid>
    </Grid>
  )
}

export default App
