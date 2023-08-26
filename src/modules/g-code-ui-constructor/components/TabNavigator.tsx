import React, {ReactElement, useState} from 'react'

import SwipeableViews from 'react-swipeable-views'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export function TabsNavigator({tabs}: any) {
  const [value, setValue] = useState(1)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <Box flex={1}>
      <AppBar position="static">
        <Tabs
          // style={{backgroundColor: '#262626', borderColor: '#fff'}}
          TabIndicatorProps={{
            style: {
              // backgroundColor: '#fff',
            },
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example">
          <Tab label="Out GCode" {...a11yProps(0)} />
          <Tab label="Command Details" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {tabs.map((tab: ReactElement, index: number) => (
          <TabPanel key={`tab_${index}`} value={value} index={index}>
            {tab}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  )
}
