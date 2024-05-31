// src/components/Header.tsx
import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="Logo" style={{ marginRight: '16px', height: '50px' }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          COTECMAR
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/rondas">Rondas</Button>
        <Button color="inherit" component={Link} to="/activos">Activos</Button>
        <Button color="inherit" component={Link} to="/usuarios">Usuarios</Button>
        <Button color="inherit" component={Link} to="/reportes">Reportes</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
