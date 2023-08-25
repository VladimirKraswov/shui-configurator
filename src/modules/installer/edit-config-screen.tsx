import React from 'react'

import Box from '@mui/material/Box'
import {Fade} from '@mui/material'

import {ParsedCommands} from './gcode-parse'
import {KinematicBlock} from './config-blocks/Kinematic'

interface IEditConfigScreen {
  config: ParsedCommands
  onChangeConfig: (commandName: string, parameterLetter: string, newValue: number) => void
}

function EditConfigScreen({config, onChangeConfig}: IEditConfigScreen) {
  return (
    <Fade in={true} timeout={1000}>
      <Box overflow="scroll" p={10} width={'100vh'} height={280}>
        <KinematicBlock config={config} onChangeConfig={onChangeConfig} />
      </Box>
    </Fade>
  )
}

export {EditConfigScreen}
