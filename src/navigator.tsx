import {Dispatch, useEffect, useState} from 'react'

import Box from '@mui/material/Box'

import {setParameterValue, loadConfig, ParsedCommands, saveConfig} from './gcode-parse'

import {EditConfigScreen} from './screens/edit-config-screen'

import {SaveScreen} from './screens/save-screen'
import {IntroScreen} from './screens/intro-screen'
import {SelectProfileScreen} from './screens/select-profile-screen'

export enum Step {
  Intro,
  SelectProfile,
  Configuration,
  Save,
}

interface INavigator {
  config: any
  activeStep: Step
  handleChangeConfig: (commandName: string, parameterLetter: string, newValue: any) => void
  changeBackupFolder: (value: string) => void
  onOpenConfig: () => void
}

function Navigator({config, activeStep, handleChangeConfig, changeBackupFolder, onOpenConfig}: INavigator) {
  return (
    <Box sx={{display: 'flex', flex: 1, height: '100%'}}>
      {activeStep === Step.Intro && <IntroScreen />}
      {activeStep === Step.SelectProfile && <SelectProfileScreen onOpenConfig={onOpenConfig} />}
      {activeStep === Step.Configuration && <EditConfigScreen config={config} onChangeConfig={handleChangeConfig} />}
      {activeStep === Step.Save && <SaveScreen onChangeMotherboard={changeBackupFolder} />}
    </Box>
  )
}

export {Navigator}
