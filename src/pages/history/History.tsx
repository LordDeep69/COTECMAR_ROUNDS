// src/components/history/History.tsx

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Typography, Paper, Button, List, ListItem, ListItemText, ListItemSecondaryAction, TextField, Grid } from '@mui/material'
import { type RootState } from '../../redux/store'
import { obtenerRondas, type Ronda } from '../../../api'
import { clearSelectedSystem } from '../../redux/features/selectedSystemSlice'
import HistoryEquipmentsList from '../../components/HistoryEquipmentsList/HistoryEquipmentsList'
import './history.scss'

const History: React.FC = () => {
  const [rondas, setRondas] = useState<Ronda[]>([])
  const [filteredRondas, setFilteredRondas] = useState<Ronda[]>([])
  const [filterYear, setFilterYear] = useState('')
  const [filterMonth, setFilterMonth] = useState('')
  const [filterDay, setFilterDay] = useState('')
  const [viewingEquipments, setViewingEquipments] = useState(false)
  const [selectedRoundId, setSelectedRoundId] = useState<string | null>(null)
  const selectedSystem = useSelector((state: RootState) => state.selectedSystem.system)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchRondas = async (): Promise<void> => {
      if (selectedSystem?.id != null) {
        const allRondas = await obtenerRondas()
        const systemRondas = allRondas.filter(ronda => ronda.id_sistema === selectedSystem.id)
        setRondas(systemRondas)
        setFilteredRondas(systemRondas)
      }
    }

    fetchRondas()
  }, [selectedSystem])

  useEffect(() => {
    let filtered = rondas
    if (filterYear) {
      filtered = filtered.filter(ronda => new Date(ronda.fecha).getFullYear() === parseInt(filterYear))
    }
    if (filterMonth) {
      filtered = filtered.filter(ronda => new Date(ronda.fecha).getMonth() + 1 === parseInt(filterMonth))
    }
    if (filterDay) {
      filtered = filtered.filter(ronda => new Date(ronda.fecha).getDate() === parseInt(filterDay))
    }
    setFilteredRondas(filtered)
  }, [filterYear, filterMonth, filterDay, rondas])

  const handleDetailsClick = (id: string): void => {
    setSelectedRoundId(id)
    setViewingEquipments(true)
  }

  const handleBackToList = (): void => {
    setViewingEquipments(false)
    setSelectedRoundId(null)
  }

  const handleBackClick = (): void => {
    dispatch(clearSelectedSystem())
    navigate('/home')
  }

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} className="history-container">
        <header className="history-header">
          <Typography variant="h3" component="h1" className="history-header-title">
            Historial del {selectedSystem?.nombre_sistema}
          </Typography>
          <Box display="flex" alignItems="center" className="date-filters" justifyContent="center" flexWrap="wrap">
            <Box className="date-filter-container">
              <TextField
                type="number"
                label="Año"
                value={filterYear}
                onChange={(e) => { setFilterYear(e.target.value) }}
                InputLabelProps={{
                  shrink: true
                }}
                className="date-filter"
                variant="outlined"
                size="small"
                sx={{ margin: 1 }}
              />
            </Box>
            <Box className="date-filter-container">
              <TextField
                type="number"
                label="Mes"
                value={filterMonth}
                onChange={(e) => { setFilterMonth(e.target.value) }}
                InputLabelProps={{
                  shrink: true
                }}
                className="date-filter"
                variant="outlined"
                size="small"
                sx={{ margin: 1 }}
              />
            </Box>
            <Box className="date-filter-container">
              <TextField
                type="number"
                label="Día"
                value={filterDay}
                onChange={(e) => { setFilterDay(e.target.value) }}
                InputLabelProps={{
                  shrink: true
                }}
                className="date-filter"
                variant="outlined"
                size="small"
                sx={{ margin: 1 }}
              />
            </Box>
          </Box>
          <Button variant="contained" color="secondary" onClick={handleBackClick} className="back-button">
            Volver
          </Button>
        </header>
        <main className="history-main">
          {viewingEquipments && selectedRoundId
            ? (
            <HistoryEquipmentsList handleBack={handleBackToList} selectedRoundId={selectedRoundId} />
              )
            : (
            <List>
              {filteredRondas.map(ronda => (
                <ListItem key={ronda.id} className="history-list-item">
                  <ListItemText
                    primary={`ID: ${ronda.id}`}
                    secondary={`Fecha: ${new Date(ronda.fecha).toLocaleString()} - Registrado por: ${ronda.registedBy}`}
                  />
                  <ListItemSecondaryAction>
                    <Button className="details-button" variant="contained" color="primary" onClick={() => { handleDetailsClick(ronda.id) }}>
                      Detalles
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
              )}
        </main>
      </Paper>
    </Container>
  )
}

export default History
