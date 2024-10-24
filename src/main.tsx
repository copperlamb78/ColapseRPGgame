import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/DefaultTheme'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={DefaultTheme}>
    <StrictMode>  
      <GlobalStyle/>
      <App />
    </StrictMode>
  </ThemeProvider>
)
