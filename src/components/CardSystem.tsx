// src/components/cardSystem/CardSystem.tsx
import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { type Sistema } from '../../utilities'

interface CardSystemProps {
  imgSystemGlobal: string
  nameSystemGlobal: string
}

const CardSystem: React.FC<CardSystemProps> = ({ imgSystemGlobal, nameSystemGlobal }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgSystemGlobal}
        alt={nameSystemGlobal}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nameSystemGlobal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripción breve del sistema...
        </Typography>
        <Button size="small" color="primary">Ver Detalles</Button>
      </CardContent>
    </Card>
  )
}

export default CardSystem
