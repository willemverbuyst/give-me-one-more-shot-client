import './App.css'

import { Grid, Typography } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

import { queryClient } from '../reactQuery/queryClient'
import BasicTabs from '../components/tabs'

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container spacing={2} columns={12}>
        <Grid xs={12} item textAlign="center">
          <Typography variant="h1">Give me one more shot</Typography>
        </Grid>
        <Grid xs={12} item display="flex" justifyContent="center">
          <BasicTabs />
        </Grid>
      </Grid>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
