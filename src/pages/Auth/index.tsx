import React, {useState} from 'react'

import Lottie from 'react-lottie'
import animationData from '../../assets/lotties/auth-background.json'

import {Login} from './Login'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

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
    <Lottie options={defaultOptions} height={400} width={400} />
    // <Login
    //   onSigninSubmit={handleSigninSubmit}
    //   onEmailChange={handleEmailChange}
    //   email={email}
    //   password={handlePasswordChahge}
    //   onPasswordChange={password}
    // />
  )
}
