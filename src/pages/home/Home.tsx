import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import SistemasComponent from '../../components/sistemasComponent'
import HistorialComponent from '../../components/historialComponent'
import AlertComponent from '../../components/alertComponent'
import AyudaComponent from '../../components/ayudaComponent'
import './home.scss'

const Home: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('sistemas')

  const renderComponent = (): JSX.Element => {
    switch (activeComponent) {
      case 'sistemas':
        return <SistemasComponent />
      case 'historial':
        return <HistorialComponent />
      case 'alerta':
        return <AlertComponent />
      case 'ayuda':
        return <AyudaComponent />
      default:
        return <SistemasComponent />
    }
  }

  return (
    <div className="home-container">
      <div className="left-section">
        <Navbar setActiveComponent={setActiveComponent} />
      </div>
      <div className="right-section">
        {renderComponent()}
      </div>
    </div>
  )
}

export default Home
