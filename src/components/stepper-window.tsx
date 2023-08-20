import {ReactNode, useState, Fragment, useEffect} from 'react'

import Stepper from '@mui/material/Stepper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {Step, StepLabel, Typography} from '@mui/material'

import {Navigator} from '../navigator'
import {FooterSwitchStep} from './footer-switch-step'
import {ParsedCommands, loadConfig, saveConfig, setParameterValue} from '../gcode-parse'

const steps = ['Добро пожаловать', 'Выбрать профиль', 'Конфигурация', 'Сохранить']

function StepperWindow() {
  const [config, setConfig] = useState<ParsedCommands>({})
  const [backupFolder, setBackupFolder] = useState('SHUI_RN.12')
  const [activeStep, setActiveStep] = useState(0)

  const handleLoadConfig = async () => {
    const parseCommands = await loadConfig('/Users/vladimirkrasov/Documents/SHUI/CFGBKP.GCO')
    setConfig(parseCommands ?? {})
  }

  const handleSaveConfig = async () => {
    try {
      // const filePath = await open({directory: true, title: 'Select folder'})
      // if (filePath) {
      //   await saveConfig(config, `${filePath}/${backupFolder}/CFGBKP.GCO`)
      //   setActiveStep((prevActiveStep: any) => prevActiveStep + 1)
      // }
    } catch (error) {}
  }

  const handleOpenConfig = async () => {
    try {
      // const filePath = await open({
      //   multiple: false,
      //   title: 'Select configuration file',
      //   filters: [
      //     {
      //       name: 'SHUI profile',
      //       extensions: ['GCO'],
      //     },
      //   ],
      // });
      // if (filePath) {
      //   const parseCommands = await loadConfig(filePath as string);
      //   setConfig(parseCommands ?? {});
      //   setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
      // }
    } catch (error) {}
  }

  function handleChangeConfig(commandName: string, parameterLetter: string, newValue: number) {
    const newConfig = setParameterValue(config, commandName, parameterLetter, newValue)
    setConfig(newConfig)
  }

  const changeBackupFolder = (value: string) => {
    setBackupFolder(value)
  }

  useEffect(() => {
    handleLoadConfig()
  }, [])

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box style={{display: 'flex', flex: 1, flexDirection: 'column'}} p={5}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: {completed?: boolean} = {}
          const labelProps: {
            optional?: ReactNode
          } = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <Typography>{label}</Typography>
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Box sx={{display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" sx={{m: 10}}>
            Конфигурация успешно сохранена
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button onClick={handleReset}>Quit</Button>
          </Box>
        </Box>
      ) : (
        <Fragment>
          <Navigator
            config={config}
            activeStep={activeStep}
            handleChangeConfig={handleChangeConfig}
            changeBackupFolder={changeBackupFolder}
            onOpenConfig={handleOpenConfig}
          />
          <FooterSwitchStep
            stepsCount={steps.length}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            onSave={handleSaveConfig}
          />
        </Fragment>
      )}
    </Box>
  )
}

export {StepperWindow}
