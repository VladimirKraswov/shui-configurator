import React from 'react'
import {Link, Typography} from '@mui/material'

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © '}
      <Link color="inherit" href="krasov-vcc@mail.ru">
        Владимир Красов
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
