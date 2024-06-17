import React from 'react'
import { useNavigate } from 'react-router-dom'
import './cardSystem.scss'

interface CardSystemProps {
  imgSystemGlobal: string
  nameSystemGlobal: string
  idSistem: string
}

const CardSystem: React.FC<CardSystemProps> = ({ imgSystemGlobal, nameSystemGlobal, idSistem }) => {
  const navigate = useNavigate()

  const handleGo = (): void => {
    navigate('/round', { state: { id: idSistem } })
  }

  return (
    <article className='systemCard' onClick={handleGo}>
      <figure className='systemCard__picture'>
        <img src={imgSystemGlobal} alt="Imagen del Sistema" />
      </figure>
      <span className='systemCard__info'>
        <span className='nameSystem'>{nameSystemGlobal}</span>
      </span>
    </article>
  )
}

export default CardSystem
