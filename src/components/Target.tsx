// components/Target.tsx
import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

interface Sistema {
  id?: number
  id_usuario: number
  nombre_sistema: string
  imagen_sistema: string
  id_sistema: string
}

interface TargetProps {
  sistema: Sistema
  onRealizarRonda: (id_sistema: string) => void
}

const Target: React.FC<TargetProps> = ({ sistema, onRealizarRonda }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardMedia
        component="img"
        height="140"
        image={sistema.imagen_sistema}
        alt={sistema.nombre_sistema}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {sistema.nombre_sistema}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID del Sistema: {sistema.id_sistema}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => { onRealizarRonda(sistema.id_sistema) }}>
          Realizar Ronda
        </Button>
      </CardActions>
    </Card>
  )
}

export default Target
