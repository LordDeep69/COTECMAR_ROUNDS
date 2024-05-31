// src/components/engineSearch/EngineSearch.tsx
import React from 'react'
import { TextField } from '@mui/material'

interface EngineSearchProps {
  getInput: (value: string) => void
}

const EngineSearch: React.FC<EngineSearchProps> = ({ getInput }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    getInput(event.target.value)
  }

  return (
    <TextField
      variant="outlined"
      placeholder="Buscar sistemas..."
      onChange={handleInputChange}
      sx={{ margin: '0 1rem', width: '300px' }}
    />
  )
}

export default EngineSearch
