import React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'
import {StepperWindow} from './modules/installer/components/stepper-window'
import {GCodeUiConstructor} from './modules/g-code-ui-constructor/GCodeUiConstructor'
import {Route, Routes} from 'react-router-dom'
import {Auth} from './pages'

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/config" element={<GCodeUiConstructor />} />
      <Route path="/install" element={<StepperWindow />} />
    </Routes>
  )
}

export default App
