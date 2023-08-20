import React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'
import {StepperWindow} from './components/stepper-window'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        position: 'fixed',
        height: '100vh',
      }}
    >
      <StepperWindow />
    </div>
  )
}

export default App
