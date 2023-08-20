import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

interface IFooterSwitchStep {
  stepsCount: number
  activeStep: any
  setActiveStep: any
  onSave: () => void
}

function FooterSwitchStep({stepsCount, activeStep, setActiveStep, onSave}: IFooterSwitchStep) {
  const lastStep = activeStep === stepsCount - 1

  const handleNext = () => {
    if (lastStep) {
      onSave()
    } else {
      setActiveStep((prevActiveStep: any) => {
        if (prevActiveStep === 0) {
          // open('https://shui.hardisoft.ru/');
        }
        return prevActiveStep + 1
      })
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep: any) => prevActiveStep - 1)
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
      <Button size="large" disabled={activeStep === 0} onClick={handleBack}>
        Назад
      </Button>
      <Box sx={{width: 10}} />
      <Button size="large" onClick={handleNext}>
        {lastStep ? 'Готово' : 'Далее'}
      </Button>
    </Box>
  )
}

export {FooterSwitchStep}
