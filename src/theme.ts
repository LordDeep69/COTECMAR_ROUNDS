// src/styles/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5' // Azul marino
    },
    secondary: {
      main: '#ff9800' // Naranja
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
})

export default theme
