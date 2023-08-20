import {useState} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {Fade, FormControl, InputLabel, MenuItem, Select} from '@mui/material'

enum Motherboard {
  MKS_Robin_Nano_1_1 = 'MKS Robin Nano 1.1',
  MKS_Robin_Nano_1_2 = 'MKS Robin Nano 1.2',
  MKS_Robin_Nano_v1_3 = 'MKS Robin Nano v1.3',
  MKS_Robin_Nano_S_v1_3 = 'MKS Robin Nano-S v1.3',
  MKS_Robin_Nano_v2_0 = 'MKS Robin Nano v2.0',
  MKS_Robin_Nano_v3_0 = 'MKS Robin Nano v3.0',
  MKS_Robin_Nano_v3_1 = 'MKS Robin Nano v3.1',
  MKS_Nano4_v3_1 = 'MKS Nano4 v3.1',
  MKS_Nano6_v3_2 = 'MKS Nano6 v3.2',
  FlyingBear_Reborn_v2_0 = 'FlyingBear Reborn v2.0',
  FlyingBear_Reborn_v3_0 = 'FlyingBear Reborn v3.0',
}

interface ISaveScreen {
  onChangeMotherboard: (backupFolder: string) => void
}

function SaveScreen({onChangeMotherboard}: ISaveScreen) {
  const [motherboard, setMotherboard] = useState(Motherboard.MKS_Robin_Nano_1_1)

  const handleMotherboard = (event: any) => {
    setMotherboard(event.target.value)
    let backupFolder = ''
    switch (event.target.value) {
      case Motherboard.MKS_Robin_Nano_1_1:
      case Motherboard.MKS_Robin_Nano_1_2:
      case Motherboard.FlyingBear_Reborn_v2_0:
      case Motherboard.FlyingBear_Reborn_v3_0:
        backupFolder = 'SHUI_RN.12'
        break
      case Motherboard.MKS_Robin_Nano_v1_3:
      case Motherboard.MKS_Robin_Nano_S_v1_3:
        backupFolder = 'SHUI_F4_RN.13'
        break
      case Motherboard.MKS_Robin_Nano_v2_0:
        backupFolder = 'SHUI_RN.20'
        break
      case Motherboard.MKS_Robin_Nano_v3_0:
      case Motherboard.MKS_Robin_Nano_v3_1:
      case Motherboard.MKS_Nano4_v3_1:
      case Motherboard.MKS_Nano6_v3_2:
        backupFolder = 'SHUI_RN.20'
        break
      default:
        backupFolder = 'SHUI_RN.13'
        break
    }

    onChangeMotherboard(backupFolder)
  }

  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Материнская плата</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={motherboard}
            label="Вид кинематики"
            onChange={handleMotherboard}
          >
            <MenuItem value={Motherboard.MKS_Robin_Nano_1_1}>{Motherboard.MKS_Robin_Nano_1_1}</MenuItem>
            <MenuItem value={Motherboard.MKS_Robin_Nano_1_2}>{Motherboard.MKS_Robin_Nano_1_2}</MenuItem>
            <MenuItem value={Motherboard.MKS_Robin_Nano_v1_3}>{Motherboard.MKS_Robin_Nano_v1_3}</MenuItem>
            <MenuItem value={Motherboard.MKS_Robin_Nano_S_v1_3}>{Motherboard.MKS_Robin_Nano_S_v1_3}</MenuItem>
            <MenuItem value={Motherboard.MKS_Robin_Nano_v2_0}>{Motherboard.MKS_Robin_Nano_v2_0}</MenuItem>
            <MenuItem value={Motherboard.MKS_Robin_Nano_v3_0}>{Motherboard.MKS_Robin_Nano_v3_0}</MenuItem>
            <MenuItem value={Motherboard.MKS_Robin_Nano_v3_1}>{Motherboard.MKS_Robin_Nano_v3_1}</MenuItem>
            <MenuItem value={Motherboard.MKS_Nano4_v3_1}>{Motherboard.MKS_Nano4_v3_1}</MenuItem>
            <MenuItem value={Motherboard.MKS_Nano6_v3_2}>{Motherboard.MKS_Nano6_v3_2}</MenuItem>
            <MenuItem value={Motherboard.FlyingBear_Reborn_v2_0}>{Motherboard.FlyingBear_Reborn_v2_0}</MenuItem>
            <MenuItem value={Motherboard.FlyingBear_Reborn_v3_0}>{Motherboard.FlyingBear_Reborn_v3_0}</MenuItem>
          </Select>
        </FormControl>
        <Typography mt={5}>
          Осталось выбрать материнскую плату вашего принтера, Программа автоматически подберет необходимую прошивку и
          создаст файлы и каталоги конфигурации. После выбора материнской платы нажмите Готово и выберите microSD
          прошивка и конфигурация будет записана на карту, вам останется вставить карту в принтер, дождаться установки,
          далее зайти в Настройки - Архивировать - Восстановить, готово!
        </Typography>
      </Box>
    </Fade>
  )
}

export {SaveScreen}
