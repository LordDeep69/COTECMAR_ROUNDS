// src/components/historyEquipmentsList/HistoryEquipmentsList.tsx

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, Card, CardContent, CardMedia, Button, Grid, Typography } from '@mui/material'
import { type RootState } from '../../redux/store'
import { obtenerEquipos, type Equipo } from '../../../api'
import HistoryRegistedFormat from '../../components/HistoryRegistedFormat/HistoryRegistedFormat'
import './historyEquipmentsList.scss'

interface HistoryEquipmentsListProps {
  handleBack: () => void
  selectedRoundId: string
}

const HistoryEquipmentsList: React.FC<HistoryEquipmentsListProps> = ({ handleBack, selectedRoundId }) => {
  const [equipos, setEquipos] = useState<Equipo[]>([])
  const [viewingEquipment, setViewingEquipment] = useState<Equipo | null>(null)
  const selectedSystem = useSelector((state: RootState) => state.selectedSystem.system)

  useEffect(() => {
    const fetchEquipos = async (): Promise<void> => {
      if (selectedSystem?.id != null) {
        const allEquipos = await obtenerEquipos()
        const systemEquipos = allEquipos.filter(equipo => equipo.id_sistema === selectedSystem.id)
        setEquipos(systemEquipos)
      }
    }

    fetchEquipos()
  }, [selectedSystem])

  const handleDetailsClick = (equipment: Equipo): void => {
    setViewingEquipment(equipment)
  }

  const handleBackToList = (): void => {
    setViewingEquipment(null)
  }

  return (
    <Box className="equipments-list-container">
      {viewingEquipment
        ? (
        <HistoryRegistedFormat equipment={viewingEquipment} roundId={selectedRoundId} handleBack={handleBackToList} />
          )
        : (
        <>
          <Button variant="contained" color="secondary" onClick={handleBack} className="back-button">
            Volver
          </Button>
          <Grid container spacing={3} className="equipments-grid">
            {equipos.map((equipment) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={equipment.id}>
                <Card className="equipment-card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={equipment.imagen_equipo}
                    alt={equipment.nombre_equipo}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {equipment.nombre_equipo}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => { handleDetailsClick(equipment) }}
                    >
                      Detalles de Ronda
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
          )}
    </Box>
  )
}

export default HistoryEquipmentsList
