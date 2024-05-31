// src/components/HeroSection.tsx
import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import heroImage from '../assets/images/logo.png' // Asegúrate de tener una imagen representativa

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
      }}
    >
      <Box>
        <Typography variant="h3" gutterBottom>
          Bienvenido a COTECMAR
        </Typography>
        <Typography variant="h6" gutterBottom>
          Innovación y tecnología en mantenimiento naval
        </Typography>
        <Button variant="contained" color="secondary">
          Comenzar
        </Button>
      </Box>
    </Box>
  )
}

export default HeroSection
