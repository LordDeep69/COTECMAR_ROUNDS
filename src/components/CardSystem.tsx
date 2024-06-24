import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedSystem } from '../redux/features/selectedSystemSlice'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

interface CardSystemProps {
  system: Sistema
}

const CardSystem: React.FC<CardSystemProps> = ({ system }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCardClick = (): void => {
    dispatch(setSelectedSystem(system))
    navigate('/round')
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }} onClick={handleCardClick}>
      <CardMedia
        component="img"
        height="140"
        image={system.imagen_sistema ?? 'default-image-path.jpg'}
        alt={system.nombre_sistema ?? 'Sistema sin nombre'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {system.nombre_sistema ?? 'Nombre del Sistema'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripción breve del sistema...
        </Typography>
        <Button size="small" color="primary">Realizar Ronda</Button>
      </CardContent>
    </Card>
  )
}

export default CardSystem
