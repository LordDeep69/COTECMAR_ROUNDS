// src/components/Footer.tsx
import React from 'react'
import { Box, Typography, Link } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box p={3} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body1">&copy; 2024 COTECMAR. Todos los derechos reservados.</Typography>
      <Link href="/privacy" color="inherit">Política de Privacidad</Link> |
      <Link href="/terms" color="inherit">Términos de Servicio</Link>
    </Box>
  )
}

export default Footer
