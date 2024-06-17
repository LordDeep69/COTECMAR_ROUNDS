import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from '../../redux/store'
import { obtenerEquipos, type Equipo } from '../../../api'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import EquipmentsList from '../../components/equipments_list/EquipmentsList'
import RegisterForm from '../../components/registerFormat/RegisterFormat' // Importamos el nuevo componente de formulario
import './rounds.scss'

const Round: React.FC = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([])
  const [registedBy, setRegistedBy] = useState('')
  const [timerKey, setTimerKey] = useState(0)
  const [viewingEquipment, setViewingEquipment] = useState<Equipo | null>(null) // Nuevo estado para controlar la vista
  const selectedSystem = useSelector((state: RootState) => state.selectedSystem.system)

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

  const handleRegister = (equipment: Equipo): void => {
    setViewingEquipment(equipment)
  }

  const handleBackToList = (): void => {
    setViewingEquipment(null)
  }

  const handleTimerComplete = (): void => {
    // Lógica para manejar lo que sucede cuando el temporizador se completa
    // Por ejemplo, desencadenar el envío de formularios
  }

  const calculateInitialTime = (): number => {
    const now = new Date()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    return 900 - (minutes % 15) * 60 - seconds // 15 minutos en segundos
  }

  return (
    <div className="round-container">
      <header className="round-header">
        <h1>{selectedSystem?.nombre_sistema}</h1>
        <input
          type="text"
          placeholder="Registed By"
          value={registedBy}
          onChange={(e) => { setRegistedBy(e.target.value) }}
        />
        <CountdownCircleTimer
          key={timerKey}
          isPlaying
          duration={calculateInitialTime()} // Duración dinámica
          colors="#A30000"
          onComplete={handleTimerComplete}
        >
          {({ remainingTime }) => (
            <div className="timer">
              <span>{Math.floor(remainingTime / 60)}:{remainingTime % 60}</span>
            </div>
          )}
        </CountdownCircleTimer>
      </header>
      <main className="round-main">
        {viewingEquipment
          ? (
          <RegisterForm equipment={viewingEquipment} handleBack={handleBackToList} />
            )
          : (
          <EquipmentsList
            selectedSystemId={selectedSystem?.id ?? 0}
            handleRegister={handleRegister}
          />
            )}
      </main>
      <footer className="round-footer">
        <button onClick={() => { handleRegister(0) }}>Enviar Todos los Registros</button>
      </footer>
    </div>
  )
}

export default Round
