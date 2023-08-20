import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {Fade} from '@mui/material'

function IntroScreen() {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography fontSize={24}>
          Эта программа создана для облегчения первоначальной настройке вашего 3D-принтера под одну из лучших и гибких
          прошивок SHUI. Просто выбирайте свой принтер или загрузите свой/чужой файл конфигурации и удобно донастройте
          его под ваши нужды. Сохраните файлы на SD карту и после установки в принтер зайдите в Архивировать, затем
          выбирайте Восстановить.
        </Typography>
      </Box>
    </Fade>
  )
}

export {IntroScreen}
