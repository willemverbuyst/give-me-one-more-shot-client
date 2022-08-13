import { Grid, Typography } from '@mui/material'
import './App.css'
import BasicTabs from './tabs'

function App() {
  return (
    <Grid container spacing={2} columns={12}>
      <Grid xs={12} item textAlign="center">
        <Typography variant="h1">Give me one more shot</Typography>
      </Grid>
      <Grid xs={12} item display="flex" justifyContent="center">
        <BasicTabs />
      </Grid>
    </Grid>
  )
}

export default App
