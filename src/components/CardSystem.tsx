import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedSystem } from '../redux/features/selectedSystemSlice'
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material'
import './CardSystem.scss'

interface CardSystemProps {
  system: Sistema
}

const CardSystem: React.FC<CardSystemProps> = ({ system }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRoundClick = (): void => {
    dispatch(setSelectedSystem(system))
    navigate('/round')
  }

  const handleHistoryClick = (): void => {
    dispatch(setSelectedSystem(system))
    navigate('/historial')
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }} className="system-card">
      <CardMedia
        component="img"
        height="140"
        image={system.imagen_sistema ?? 'default-image-path.jpg'}
        alt={system.nombre_sistema ?? 'Sistema sin nombre'}
        className="system-card-media"
      />
      <CardContent className="system-card-content">
        <Typography gutterBottom variant="h5" component="div" className="system-card-title">
          {system.nombre_sistema ?? 'Nombre del Sistema'}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="system-card-description">
          Descripción breve del sistema...
        </Typography>
        <Box display="flex" justifyContent="space-between" marginTop={2}>
          <Button size="small" color="primary" onClick={handleRoundClick} className="round-button">Realizar Ronda</Button>
          <Button size="small" color="secondary" onClick={handleHistoryClick} className="history-button">Historial</Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardSystem
