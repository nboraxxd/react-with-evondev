import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    background: #e5e5e5;
  }
`
