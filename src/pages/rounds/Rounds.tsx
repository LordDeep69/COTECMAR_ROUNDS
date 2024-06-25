import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { type RootState } from '../../redux/store'
import { obtenerEquipos, type Equipo, crearRonda, type Ronda, obtenerDetallesEquipo, crearRegistroEquipo } from '../../../api'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import EquipmentsList from '../../components/equipments_list/EquipmentsList'
import RegisterForm from '../../components/registerFormat/RegisterFormat'
import { TextField, Button, Container, Typography, Box, Grid, Paper } from '@mui/material'
import { selectSelectedRoundId, setSelectedRoundId, clearSelectedRoundId } from '../../redux/features/selectedRoundSlice'
import { setRegisteredEquipments, clearRegisteredEquipments } from '../../redux/features/registeredEquipmentSlice'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import './rounds.scss'

const toMySQLDatetimeFormat = (isoString) => {
  const date = new Date(isoString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes() + 1).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

const Round: React.FC = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([])
  const [registedBy, setRegistedBy] = useState('')
  const [timerKey, setTimerKey] = useState(0)
  const [viewingEquipment, setViewingEquipment] = useState<Equipo | null>(null)
  const [roundFinalized, setRoundFinalized] = useState(false)
  const selectedSystem = useSelector((state: RootState) => state.selectedSystem.system)
  const selectedRoundId = useSelector(selectSelectedRoundId)
  const registeredEquipments = useSelector((state: RootState) => state.registeredEquipment.registeredEquipments)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEquipos = async (): Promise<void> => {
      if (selectedSystem?.id !== null) {
        const allEquipos = await obtenerEquipos()
        const systemEquipos = allEquipos.filter(equipo => equipo.id_sistema === selectedSystem.id)
        setEquipos(systemEquipos)
      }
    }

    fetchEquipos()
  }, [selectedSystem])

  useEffect(() => {
    const registeredEquipments = JSON.parse(sessionStorage.getItem('registeredEquipments') || '[]')
    dispatch(setRegisteredEquipments(registeredEquipments))
  }, [dispatch])

  useEffect(() => {
    if (!selectedRoundId && !roundFinalized) {
      Swal.fire({
        title: 'Ingrese su identificación',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        preConfirm: (login) => {
          return login
        }
      }).then((result) => {
        if (result.isConfirmed && result.value) {
          const nuevaRondaId = uuidv4()
          const nuevaRonda: Ronda = {
            id: nuevaRondaId,
            id_sistema: selectedSystem.id,
            fecha: toMySQLDatetimeFormat(new Date().toISOString()),
            registedBy: result.value
          }
          crearRonda(nuevaRonda).then(() => {
            dispatch(setSelectedRoundId(nuevaRondaId))
            setRegistedBy(result.value)
            Swal.fire({
              title: 'Ronda creada exitosamente',
              icon: 'success',
              confirmButtonText: 'Aceptar',
              allowOutsideClick: false
            })
          }).catch((error) => {
            console.error('Error al crear la ronda:', error)
            Swal.fire({
              title: 'Error',
              text: 'No se pudo crear la ronda',
              icon: 'error',
              confirmButtonText: 'Aceptar',
              allowOutsideClick: false
            })
          })
        }
      })
    }
  }, []) // Ejecutar una vez al montar el componente

  const handleRegister = (equipment: Equipo): void => {
    setViewingEquipment(equipment)
  }

  const handleBackToList = (): void => {
    setViewingEquipment(null)
  }

  const handleTimerComplete = (): void => {
    Swal.fire({
      title: 'Tiempo de Ronda Finalizado',
      text: 'La ronda ha terminado automáticamente.',
      icon: 'info',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then(() => {
      handleTimerFinalizeRound()
    })
  }

  const calculateInitialTime = (): number => {
    const now = new Date()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    return 900 - (minutes % 15) * 60 - seconds // 15 minutos en segundos
  }

  const generateDefaultData = (fields: any[]) => {
    const data: any = {}
    fields.forEach(field => {
      switch (field.Type) {
        case 'int':
        case 'float':
          data[field.Field] = 0
          break
        default:
          data[field.Field] = 'No Registrado'
          break
      }
    })
    return data
  }

  const registerMissingEquipments = async () => {
    const missingEquipments = equipos.filter(equipo => !registeredEquipments.includes(equipo.id))
    for (const equipment of missingEquipments) {
      const equipmentDetails = await obtenerDetallesEquipo(equipment.id_equipo)
      const fields = equipmentDetails.filter((field: any) => field.Field !== 'id' && field.Field !== 'id_ronda' && field.Field !== 'fecha')
      const data = generateDefaultData(fields)
      data.id_ronda = selectedRoundId
      data.fecha = toMySQLDatetimeFormat(new Date().toISOString())
      await crearRegistroEquipo(equipment.id_equipo, data)
    }
  }

  const handleTimerFinalizeRound = async () => {
    const missingEquipments = equipos.filter(equipo => !registeredEquipments.includes(equipo.id))
    if (missingEquipments.length > 0) {
      try {
        await registerMissingEquipments()
        dispatch(clearRegisteredEquipments())
        dispatch(clearSelectedRoundId())
        sessionStorage.removeItem('registeredEquipments')
        setRoundFinalized(true)
        Swal.fire({
          title: 'Ronda finalizada',
          text: 'Todos los equipos han sido registrados',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
        }).then(() => {
          navigate('/home')
        })
      } catch (error) {
        console.error('Error al registrar equipos faltantes:', error)
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron registrar todos los equipos faltantes',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
        }).then(() => {
          navigate('/home')
        })
      }
    } else {
      dispatch(clearRegisteredEquipments())
      dispatch(clearSelectedRoundId())
      sessionStorage.removeItem('registeredEquipments')
      setRoundFinalized(true)
      Swal.fire({
        title: 'Ronda finalizada',
        text: 'Todos los equipos han sido registrados',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false
      }).then(() => {
        navigate('/home')
      })
    }
  }

  const handleFinalizeRound = async () => {
    const missingEquipments = equipos.filter(equipo => !registeredEquipments.includes(equipo.id))
    if (missingEquipments.length > 0) {
      Swal.fire({
        title: 'Hay equipos sin registrar',
        text: '¿Desea continuar registrando los equipos faltantes con valores por defecto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Volver',
        allowOutsideClick: false
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await registerMissingEquipments()
            dispatch(clearRegisteredEquipments())
            dispatch(clearSelectedRoundId())
            sessionStorage.removeItem('registeredEquipments')
            setRoundFinalized(true)
            Swal.fire({
              title: 'Ronda finalizada',
              text: 'Todos los equipos han sido registrados',
              icon: 'success',
              confirmButtonText: 'Aceptar',
              allowOutsideClick: false
            }).then(() => {
              navigate('/home')
            })
          } catch (error) {
            console.error('Error al registrar equipos faltantes:', error)
            Swal.fire({
              title: 'Error',
              text: 'No se pudieron registrar todos los equipos faltantes',
              icon: 'error',
              confirmButtonText: 'Aceptar',
              allowOutsideClick: false
            }).then(() => {
              navigate('/home')
            })
          }
        }
      })
    } else {
      dispatch(clearRegisteredEquipments())
      dispatch(clearSelectedRoundId())
      sessionStorage.removeItem('registeredEquipments')
      setRoundFinalized(true)
      Swal.fire({
        title: 'Ronda finalizada',
        text: 'Todos los equipos han sido registrados',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false
      }).then(() => {
        navigate('/home')
      })
    }
  }

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} className="round-container">
        <header className="round-header">
          <Typography variant="h3" component="h1" className="round-header-title">
            {selectedSystem?.nombre_sistema}
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <label htmlFor="registedBy" className="registedBy-label">Registrado por:</label>
            <TextField
              id="registedBy"
              placeholder="Registed By"
              value={registedBy}
              onChange={(e) => { setRegistedBy(e.target.value) }}
              disabled={!!registedBy}
              variant="outlined"
              size="small"
              className="registedBy-input"
            />
          </Box>
          <CountdownCircleTimer
            key={timerKey}
            isPlaying
            duration={calculateInitialTime()}
            colors="#A30000"
            onComplete={handleTimerComplete}
          >
            {({ remainingTime }) => (
              <Typography variant="h5" className="timer">
                {Math.floor(remainingTime / 60)}:{remainingTime % 60}
              </Typography>
            )}
          </CountdownCircleTimer>
        </header>
        <main className="round-main">
          {viewingEquipment
            ? (
              <RegisterForm equipment={viewingEquipment} handleBack={handleBackToList} roundId={selectedRoundId} />
              )
            : (
              <EquipmentsList
                selectedSystemId={selectedSystem?.id ?? 0}
                handleRegister={handleRegister}
              />
              )}
        </main>
        <footer className="round-footer">
          <Button variant="contained" color="success" onClick={handleFinalizeRound}>Finalizar Ronda</Button>
        </footer>
      </Paper>
    </Container>
  )
}

export default Round
