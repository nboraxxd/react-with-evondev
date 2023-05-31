import React from 'react'
import { ThemeProvider } from 'styled-components'
import './App.scss'
import CardList from './components/card/CardList'
import { GlobalStyles } from './components/GlobalStyle'

const theme = {
  colors: {
    purple: '#7d6aff',
  },
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CardList />
    </ThemeProvider>
  )
}

export default App
