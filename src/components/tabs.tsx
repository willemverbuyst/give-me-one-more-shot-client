/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import Agenda from './agenda'
import ListOfPatients from './listOfPatients'
import Signup from './signup'

interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps): JSX.Element {
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

function a11yProps(index: number): { [key: string]: string } {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs(): JSX.Element {
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
            <Tab label="Agenda" {...a11yProps(0)} />
            <Tab label="Patients" {...a11yProps(1)} />
            <Tab label="Signup" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid display="flex" item justifyContent="center">
          <TabPanel value={value} index={0}>
            <Agenda />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ListOfPatients />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Signup />
          </TabPanel>
        </Grid>
      </Box>
    </Grid>
  )
}
