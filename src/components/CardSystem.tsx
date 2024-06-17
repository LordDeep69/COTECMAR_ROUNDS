import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedSystem } from '../redux/features/selectedSystemSlice'
import { setSelectedRoundId, selectSelectedRoundId } from '../redux/features/selectedRoundSlice'
import { type Sistema, crearRonda, type Ronda } from '../../api'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

const toMySQLDatetimeFormat = (isoString) => {
  const date = new Date(isoString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

interface CardSystemProps {
  system: Sistema
}

const CardSystem: React.FC<CardSystemProps> = ({ system }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const existingRoundId = useSelector(selectSelectedRoundId)
  const [isRoundCreated, setIsRoundCreated] = useState(false) // Nueva bandera

  const handleCardClick = async (): Promise<void> => {
    dispatch(setSelectedSystem(system))

    if (!existingRoundId && !isRoundCreated) {
      // Crear una nueva ronda solo si no hay una existente y no se ha creado aún
      setIsRoundCreated(true) // Set flag to true to prevent further creation attempts
      const nuevaRondaId = uuidv4()
      const nuevaRonda: Ronda = {
        id: nuevaRondaId,
        id_sistema: system.id,
        fecha: toMySQLDatetimeFormat(new Date().toISOString()) // Usar la nueva función para convertir la fecha
      }

      try {
        await crearRonda(nuevaRonda)
        dispatch(setSelectedRoundId(nuevaRondaId))
        console.log('Ronda creada exitosamente')
      } catch (error) {
        console.error('Error al crear la ronda:', error)
        setIsRoundCreated(false) // Reset flag in case of error
      }
    }

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
        <Button size="small" color="primary" onClick={handleCardClick}>Realizar Ronda</Button>
      </CardContent>
    </Card>
  )
}

export default CardSystem
