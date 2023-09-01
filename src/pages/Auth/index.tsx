import React, {useState} from 'react'

import {Player} from '@lottiefiles/react-lottie-player'
import animationData from '../../assets/lotties/auth-background-itrum.json'

import {Login} from './Login'
import {Box} from '@mui/material'

export const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistration, setIsRegistration] = useState(false)

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('email: ' + email + ', password: ' + password)
  }

  return (
    <Box bgcolor="red">
      <Player style={{display: 'flex', width: '101%'}} autoplay loop src={animationData} />
      <Login
        isRegistration={isRegistration}
        email={email}
        password={password}
        onSubmit={handleSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onChangeToRegistration={() => setIsRegistration((prev) => !prev)}
      />
    </Box>
  )
}
