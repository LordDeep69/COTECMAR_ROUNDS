import React, { useState, useEffect } from 'react'
import { obtenerEquipos, type Equipo } from '../../../api'
import './equipmentsList.scss'

interface EquipmentsListProps {
  selectedSystemId: number
  handleRegister: (equipment: Equipo) => void
}

const EquipmentsList: React.FC<EquipmentsListProps> = ({ selectedSystemId, handleRegister }) => {
  const [equipos, setEquipos] = useState<Equipo[]>([])
  const [filteredEquipos, setFilteredEquipos] = useState<Equipo[]>([])
  const [searchTerm, setSearchTerm] = useState('')

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
    <div className="equipments-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar equipos..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
      </div>
      <div className="equipments-grid">
        {filteredEquipos.map((equipment) => (
          <div className="equipment-card" key={equipment.id}>
            <img src={equipment.imagen_equipo} alt={equipment.nombre_equipo} />
            <h2>{equipment.nombre_equipo}</h2>
            <button onClick={() => { handleRegister(equipment) }}>Registrar Ronda</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EquipmentsList
