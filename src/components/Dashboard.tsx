// src/components/Dashboard.tsx
import React from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material'
import { useQuery } from 'react-query'
import { obtenerSistemas } from '../../api'

const Dashboard: React.FC = () => {
  const { data: sistemas, isLoading, error } = useQuery('sistemas', obtenerSistemas)

  if (isLoading) return <Typography>Cargando...</Typography>
  if (error) return <Typography>Error al cargar sistemas</Typography>

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Resumen del Sistema
      </Typography>
      <Grid container spacing={3}>
        {sistemas?.map(sistema => (
          <Grid item xs={12} md={4} key={sistema.id}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6">{sistema.nombre_sistema}</Typography>
              <img src={sistema.imagen_sistema} alt={sistema.nombre_sistema} style={{ width: '100%' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Dashboard
