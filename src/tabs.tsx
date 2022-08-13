import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Home from './home'
import List from './list'
import Signup from './signup'
import { Grid } from '@mui/material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Grid xs={6} display="flex" item justifyContent="center">
      <Box sx={{ width: '100%' }}>
        <Grid
          sx={{ borderBottom: 1, borderColor: 'divider' }}
          display="flex"
          item
          justifyContent="center"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="List" {...a11yProps(1)} />
            <Tab label="Signup" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid display="flex" item justifyContent="center">
          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <List />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Signup />
          </TabPanel>
        </Grid>
      </Box>
    </Grid>
  )
}
