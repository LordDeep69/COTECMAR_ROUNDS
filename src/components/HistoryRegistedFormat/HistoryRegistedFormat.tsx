// src/components/historyRegistedFormat/HistoryRegistedFormat.tsx

import React, { useEffect, useState } from 'react'
import { TextField, Button, Container, Typography, Box, Grid, Paper } from '@mui/material'
import { type Equipo, obtenerDetallesEquipo, obtenerRegistroEquipo } from '../../../api'
import './historyRegistedFormat.scss'

interface HistoryRegistedFormatProps {
  equipment: Equipo
  roundId: string
  handleBack: () => void
}

const HistoryRegistedFormat: React.FC<HistoryRegistedFormatProps> = ({ equipment, roundId, handleBack }) => {
  const [fields, setFields] = useState<any[]>([])
  const [formData, setFormData] = useState<any>({})

  useEffect(() => {
    const fetchEquipmentDetails = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:3002/api/equipo-detalles/${equipment.id_equipo}`)
        const data = await response.json()
        const filteredData = data.filter((field: any) => field.Field !== 'id' && field.Field !== 'id_ronda' && field.Field !== 'fecha')
        setFields(filteredData)
      } catch (error) {
        console.error('Error al obtener los detalles del equipo:', error)
      }
    }

    const fetchEquipmentData = async (): Promise<void> => {
      try {
        const data = await obtenerRegistroEquipo(equipment.id_equipo, roundId)
        setFormData(data)
      } catch (error) {
        console.error('Error al obtener el registro del equipo:', error)
      }
    }

    fetchEquipmentDetails()
    fetchEquipmentData()
  }, [equipment.id_equipo, roundId])

  return (
    <Container maxWidth="md">
      <Paper elevation={3} className="register-form-container">
        <Button variant="contained" color="primary" onClick={handleBack} className="back-button">← Volver</Button>
        <Typography variant="h4" component="h1" gutterBottom>
          Formulario de Registro - {equipment.nombre_equipo}
        </Typography>
        <form>
          <Grid container spacing={3}>
            {fields.map((field) => (
              <Grid item xs={12} key={field.Field}>
                <TextField
                  fullWidth
                  label={field.Field}
                  variant="outlined"
                  type={field.Type === 'int' ? 'number' : 'text'}
                  value={formData[field.Field] || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                  className="form-field"
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default HistoryRegistedFormat
