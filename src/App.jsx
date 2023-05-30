import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button/Button'

function App() {
  return (
    <div>
      <Button>Primary</Button>
      <Button isSecondary>Secondary</Button>
    </div>
  )
}

export default App
