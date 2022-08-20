import { Grid, Typography } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import { queryClient } from './reactQuery/queryClient'
import BasicTabs from './tabs'

function App() {
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
