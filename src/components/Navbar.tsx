import React from 'react'
import './navbar.scss'

interface NavbarProps {
  setActiveComponent: (component: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ setActiveComponent }) => {
  const [active, setActive] = React.useState('sistemas')

  const handleClick = (component: string): void => {
    setActive(component)
    setActiveComponent(component)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <figure>
          <img src="https://i.ibb.co/NjFfFCZ/RONDAS-LOGO.png" alt="Rondas Logo" />
        </figure>
        <h2>Rondas</h2>
      </div>
      <ul className="nav-links">
        <li
          className={active === 'sistemas' ? 'active' : ''}
          onClick={() => { handleClick('sistemas') }}
        >
          Sistemas
        </li>
        <li
          className={active === 'historial' ? 'active' : ''}
          onClick={() => { handleClick('historial') }}
        >
          Historial
        </li>
        <li
          className={active === 'alerta' ? 'active' : ''}
          onClick={() => { handleClick('alerta') }}
        >
          Reportar Alerta
        </li>
        <li
          className={active === 'ayuda' ? 'active' : ''}
          onClick={() => { handleClick('ayuda') }}
        >
          Ayuda
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
