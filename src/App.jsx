import React from 'react'
import './App.scss'
import CardList from './components/card/CardList'
import { GlobalStyles } from './components/GlobalStyle'

function App() {
  return (
    <div>
      <GlobalStyles />
      <CardList />
    </div>
  )
}

export default App
