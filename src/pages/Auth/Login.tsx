import React from 'react'

import {Button, Avatar, Box, CssBaseline, Grid, Paper, TextField, Typography, Link} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {Copyright} from '../../components'
import {FormControl} from '@mui/base'

interface IProps {
  isRegistration: boolean
  email: string
  password: string
  onSubmit: (e: any) => void
  onEmailChange: (e: any) => void
  onPasswordChange: (e: any) => void
  onChangeToRegistration: () => void
}

export const Login = ({
  isRegistration,
  email,
  password,
  onSubmit,
  onEmailChange,
  onPasswordChange,
  onChangeToRegistration,
}: IProps) => {
  const classes = useStyles()

  return (
    <Box className={classes.centerContainer}>
      <CssBaseline />
      <Box className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          {isRegistration ? 'Регистрация' : 'Вход'}
        </Typography>
        <FormControl className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onPasswordChange}
          />
          <Button fullWidth type="submit" variant="contained" color="primary" className={classes.submit}>
            {isRegistration ? 'Зарегистрироваться' : 'Войти'}
          </Button>
          <Grid container>
            <Grid item xs>
              {!isRegistration && (
                <Link href="#" variant="body2">
                  Забыли пароль?
                </Link>
              )}
            </Grid>
            <Grid item>
              <Link onClick={onChangeToRegistration} variant="body2">
                {isRegistration ? 'Вход' : 'Регистрация'}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </FormControl>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) => ({
  centerContainer: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 'auto',
    opacity: 0.9,
  },
  avatar: {
    margin: 1,
    backgroundColor: '#ff0',
  },
  form: {
    width: '100%',
    marginTop: 1,
  },
  submit: {
    margin: 3,
  },
}))
