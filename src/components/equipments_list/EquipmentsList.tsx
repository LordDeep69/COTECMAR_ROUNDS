import React, { useState, useEffect } from 'react'
import { obtenerEquipos, type Equipo } from '../../../api'
import { useSelector } from 'react-redux'
import { type RootState } from '../../redux/store'
import { TextField, Card, CardContent, CardMedia, Button, Grid, Typography, Box } from '@mui/material'
import './equipmentsList.scss'

interface EquipmentsListProps {
  selectedSystemId: number
  handleRegister: (equipment: Equipo) => void
}

const EquipmentsList: React.FC<EquipmentsListProps> = ({ selectedSystemId, handleRegister }) => {
  const [equipos, setEquipos] = useState<Equipo[]>([])
  const [filteredEquipos, setFilteredEquipos] = useState<Equipo[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const registeredEquipments = useSelector((state: RootState) => state.registeredEquipment.registeredEquipments)

  useEffect(() => {
    const fetchEquipos = async (): Promise<void> => {
      const allEquipos = await obtenerEquipos()
      const systemEquipos = allEquipos.filter(equipo => equipo.id_sistema === selectedSystemId)
      setEquipos(systemEquipos)
      setFilteredEquipos(systemEquipos)
    }

    fetchEquipos()
  }, [selectedSystemId])

  useEffect(() => {
    const results = equipos.filter(equipo =>
      equipo.nombre_equipo.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredEquipos(results)
  }, [searchTerm, equipos])

  return (
    <Box className="equipments-list-container">
      <Box className="search-container">
        <TextField
          type="text"
          placeholder="Buscar equipos..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
          fullWidth
          variant="outlined"
          size="small"
        />
      </Box>
      <Grid container spacing={3} className="equipments-grid">
        {filteredEquipos.map((equipment) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={equipment.id}>
            <Card className={`equipment-card ${registeredEquipments.includes(equipment.id) ? 'registered' : ''}`}>
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
                  color={registeredEquipments.includes(equipment.id) ? 'secondary' : 'primary'}
                  onClick={() => { handleRegister(equipment) }}
                  disabled={registeredEquipments.includes(equipment.id)}
                >
                  {registeredEquipments.includes(equipment.id) ? 'Registrado' : 'Registrar Ronda'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default EquipmentsList
