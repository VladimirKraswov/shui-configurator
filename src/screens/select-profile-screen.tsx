import React from 'react'

import Box from '@mui/material/Box'
import {Button, Fade, FormControl, MenuItem, Select, Typography} from '@mui/material'

import {useState} from 'react'

enum Profile {
  FlyingBearGhost5 = 'FlyingBear Ghost 5',
}

interface ISelectProfileScreen {
  onOpenConfig: () => void
}

function SelectProfileScreen({onOpenConfig}: ISelectProfileScreen) {
  const [profile, setProfile] = useState(Profile.FlyingBearGhost5)

  const handleSelectProfile = (event: any) => {
    setProfile(event.target.value)
  }

  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={profile}
            label="Ваш принтер"
            onChange={handleSelectProfile}>
            <MenuItem value={Profile.FlyingBearGhost5}>{Profile.FlyingBearGhost5}</MenuItem>
          </Select>
          <Button style={{marginTop: 20}} size="large" variant="contained" onClick={onOpenConfig}>
            Свой файл
          </Button>
        </FormControl>
        <Typography mt={5}>
          Вы можете выбрать один из готовых профилей конфигурации для самых распространенных принтеров, либо
          самостоятельно загрузить свой файл конфигурации
        </Typography>
      </Box>
    </Fade>
  )
}

export {SelectProfileScreen}
