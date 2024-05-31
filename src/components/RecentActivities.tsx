// src/components/RecentActivities.tsx
import React from 'react'
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import { useQuery } from 'react-query'
import { obtenerRondas } from '../../api'

const RecentActivities: React.FC = () => {
  const { data: rondas, isLoading, error } = useQuery('rondas', obtenerRondas)

  if (isLoading) return <Typography>Cargando...</Typography>
  if (error) return <Typography>Error al cargar actividades recientes</Typography>

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Actividades Recientes
      </Typography>
      <List>
        {rondas?.map(ronda => (
          <ListItem key={ronda.id}>
            <ListItemText primary={`Ronda ID: ${ronda.id}`} secondary={`Fecha: ${ronda.fecha}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default RecentActivities
