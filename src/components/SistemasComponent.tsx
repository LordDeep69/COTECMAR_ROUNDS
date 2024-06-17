import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { obtenerSistemas, type Sistema } from '../../api'
import { type RootState } from '../redux/store'
import { setUserLogged, selectUserLogged, type UserLoggedState } from '../redux/features/userLogged/userLoggedSlice'
import CardSystem from './CardSystem'
import './sistemas.scss'

const SistemasComponent: React.FC = () => {
  const [sistemas, setSistemas] = useState<Sistema[]>([])
  const [filteredSistemas, setFilteredSistemas] = useState<Sistema[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const userLogged = useSelector(selectUserLogged)
  const dispatch = useDispatch()

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('userLogged')
    if (!userLogged.email && userFromLocalStorage) {
      dispatch(setUserLogged(JSON.parse(userFromLocalStorage) as UserLoggedState))
    }
  }, [dispatch, userLogged.email])

  useEffect(() => {
    const fetchSistemas = async (): Promise<void> => {
      const data = await obtenerSistemas()

      if (userLogged.role === 'admin') {
        setSistemas(data)
        setFilteredSistemas(data)
      } else {
        const filteredSistemas = data.filter((sistema: Sistema) => sistema.id_usuario === userLogged.id)
        setSistemas(filteredSistemas)
        setFilteredSistemas(filteredSistemas)
      }
    }

    fetchSistemas()
  }, [userLogged])

  useEffect(() => {
    const results = sistemas.filter((sistema) =>
      sistema.nombre_sistema.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredSistemas(results)
  }, [searchTerm, sistemas])

  return (
    <div className="sistemas-container">
      <div className="sistemas-header">
        <input
          type="text"
          placeholder="Buscar sistemas..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        {userLogged.role === 'admin' && (
          <button className="add-system-button">Agregar Sistema</button>
        )}
      </div>
      <div className="sistemas-content">
        {filteredSistemas.map((sistema) => (
          <CardSystem
            key={sistema.id}
            system={sistema}
          />
        ))}
      </div>
    </div>
  )
}

export default SistemasComponent
