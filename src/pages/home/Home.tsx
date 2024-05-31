import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './home.scss'
import EngineSearch from '../../components/engineSearch/EngineSearch'
import CardSystem from '../../components/cardSystem/CardSystem'
import { selectSistemas } from '../../redux/features/sistemasSlice' // Asegúrate de que la ruta sea correcta
import { type Sistema } from '../../utilities'

const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState('')
  const sistemas = useSelector(selectSistemas) // Obtiene los sistemas del estado global
  const [filteredSistemas, setFilteredSistemas] = useState(sistemas)

  // Actualiza los sistemas filtrados cuando cambia el input de búsqueda o la lista de sistemas
  useEffect(() => {
    if (searchInput !== '') {
      // Caso 2: Filtra los sistemas que contienen la cadena de caracteres del input
      setFilteredSistemas(sistemas.filter((sistema: Sistema) => sistema.nombre_sistema.includes(searchInput)))
    } else {
      // Caso 1: Muestra todos los sistemas asociados al usuario
      setFilteredSistemas(sistemas)
    }
  }, [searchInput, sistemas])

  const handleSearchInput = (value: string): void => {
    setSearchInput(value) // Actualiza el estado local con el valor del input de búsqueda
  }

  const [option, setOption] = useState<number>(1)

  return (
    <main className="home">
      <section className="home__left">
        <figure>
          <img src="https://i.ibb.co/NjFfFCZ/RONDAS-LOGO.png" alt="Logo App" />
          <h2>Rondas</h2>
        </figure>
        <section className='menu'>
          <h2 className='titleMenu'>Tablero de  <br/>Operaciones</h2>
          <h2 onClick={() => { setOption(1) }} className='option'>Sistemas</h2>
          <h2 onClick={() => { setOption(2) }} className='option'>Historial</h2>
          <h2 onClick={() => { setOption(3) }} className='option'>Reportar Alerta</h2>
          <h2 onClick={() => { setOption(4) }} className='option'>Ayuda</h2>
        </section>
      </section>
      {option === 1 && <section className="home__right">
        <section className='searchEngine'>
          <h1 className='titleSelected' >Sistemas</h1>
          {/* Proporcionar la función handleSearchInput como propósito */}
          <section className='mySearch'>

            <figure className='figureFilter'>
              <img src="https://i.ibb.co/M6pXjrd/image-2.png" alt="filter" />
            </figure>
            <EngineSearch getInput={handleSearchInput} />

          </section>
        </section>
        <section className='container'>
          <section className='actionsBoard'>
            <span className='addSystem'>
                <p>Agregar <br/>Sistema</p>
            </span>

            <span className='classystem'>
                <p>Tipo Guerra</p>
            </span>

          </section>
          <section className='board'>            {filteredSistemas.map((sistema: Sistema) => (
              <CardSystem
                key={sistema.id}
                imgSystemGlobal={sistema.imagen_sistema}
                nameSystemGlobal={sistema.nombre_sistema}
              />
          ))}
          </section>
        </section>
      </section>}

      {option === 2 && <section className="home__right">
            <b>HISTORIAL</b>
      </section>}

      {option === 3 && <section className="home__right">
            <b>REPORTE DE ALERTA</b>
      </section>}

      {option === 4 && <section className="home__right">
            <b>AYUDA</b>
      </section>}

    </main>
  )
}

export default Home
