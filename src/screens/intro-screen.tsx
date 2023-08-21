import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {Fade} from '@mui/material'
import {info} from '../assets/info'

const IntroScreen = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography fontSize={24}>{info}</Typography>
      </Box>
    </Fade>
  )
}

export {IntroScreen}
