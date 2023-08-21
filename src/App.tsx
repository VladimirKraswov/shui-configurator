import React from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'
import {StepperWindow} from './components/stepper-window'
import {GCodeUiConstructor} from './modules/g-code-ui-constructor/GCodeUiConstructor'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%' /* Растягиваем на всю ширину родителя */,
        height: '100%' /* Растягиваем на всю высоту родителя */,
      }}>
      <GCodeUiConstructor />
    </div>
  )
}

export default App
