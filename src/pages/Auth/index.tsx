import React, {useState} from 'react'

import {Player, Controls} from '@lottiefiles/react-lottie-player'
import animationData from '../../assets/lotties/auth-background.json'

import {Login} from './Login'

export const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChahge = (e: any) => {
    setPassword(e.target.value)
  }

  const handleSigninSubmit = (e: any) => {
    e.preventDefault()
    console.log('email: ' + email + ', password: ' + password)
  }

  return (
    <>
      <Player
        style={{flex: 1}}
        autoplay
        loop
        src={animationData}
        rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}}
      />
      <Login
        onSigninSubmit={handleSigninSubmit}
        onEmailChange={handleEmailChange}
        email={email}
        password={handlePasswordChahge}
        onPasswordChange={password}
      />
    </>
  )
}
