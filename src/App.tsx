import { Grid, Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './home'
import List from './list'
import Signup from './signup'

function App() {
  return (
    <Grid container spacing={2} columns={12}>
      <Grid xs={12} item textAlign="center">
        <Typography variant="h1">Give me one more shot</Typography>
      </Grid>
      <Grid xs={12} item display="flex" justifyContent="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Grid>
    </Grid>
  )
}

export default App
