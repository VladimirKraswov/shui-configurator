import React from 'react'
import {Dispatch, useEffect, useState} from 'react'

import Box from '@mui/material/Box'

import {setParameterValue, loadConfig, ParsedCommands, saveConfig} from './modules/installer/gcode-parse'

import {EditConfigScreen} from './modules/installer/edit-config-screen'

import {SaveScreen} from './modules/installer/save-screen'
import {IntroScreen} from './modules/installer/intro-screen'
import {SelectProfileScreen} from './modules/installer/select-profile-screen'
import {GCodeUiConstructor} from './modules/g-code-ui-constructor/GCodeUiConstructor'

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
      {/* {activeStep === Step.Intro && <IntroScreen />} */}
      {activeStep === Step.Intro && <GCodeUiConstructor />}
      {activeStep === Step.SelectProfile && <SelectProfileScreen onOpenConfig={onOpenConfig} />}
      {activeStep === Step.Configuration && <EditConfigScreen config={config} onChangeConfig={handleChangeConfig} />}
      {activeStep === Step.Save && <SaveScreen onChangeMotherboard={changeBackupFolder} />}
    </Box>
  )
}

export {Navigator}
