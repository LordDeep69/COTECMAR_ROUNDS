// sistemasSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Definición del estado inicial para Sistemas
interface Sistema {
  id: number
  id_usuario: number
  nombre_sistema: string
  imagen_sistema: string
  id_sistema: string
}

interface SistemasState {
  sistemas: Sistema[]
}

const initialState: SistemasState = {
  sistemas: []
}

// Creación del slice para Sistemas
export const sistemasSlice = createSlice({
  name: 'sistemas',
  initialState,
  reducers: {
    // Acción para establecer los sistemas
    setSistemas: (state, action: PayloadAction<Sistema[]>) => {
      state.sistemas = action.payload
    },
    // Acción para agregar un sistema
    addSistema: (state, action: PayloadAction<Sistema>) => {
      state.sistemas.push(action.payload)
    },
    // Acción para actualizar un sistema
    updateSistema: (state, action: PayloadAction<Sistema>) => {
      const index = state.sistemas.findIndex(sistema => sistema.id === action.payload.id)
      if (index !== -1) {
        state.sistemas[index] = action.payload
      }
    },
    // Acción para eliminar un sistema
    deleteSistema: (state, action: PayloadAction<number>) => {
      state.sistemas = state.sistemas.filter(sistema => sistema.id !== action.payload)
    }
  }
})

// Exportación de las acciones
export const { setSistemas, addSistema, updateSistema, deleteSistema } = sistemasSlice.actions

// Selector para obtener el estado de Sistemas
export const selectSistemas = (state: RootState) => state.sistemas.sistemas

// Exportación del reducer
export default sistemasSlice.reducer
