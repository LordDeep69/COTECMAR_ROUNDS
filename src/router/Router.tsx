import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Rounds from '../pages/rounds/Rounds'
import History from '../pages/history/History'

const Router: React.FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Login/>}/>
                <Route path= "/home" element={<Home/>}/>
                <Route path= "/round" element={<Rounds/>}/>
                <Route path= "/historial" element={<History/>}/>

            </Routes>
        </BrowserRouter>
  )
}

export default Router
