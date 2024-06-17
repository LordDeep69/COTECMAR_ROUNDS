// src/redux/features/selectedSystem/selectedSystemSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Sistema } from '../../../api'
import { type RootState } from '../store'

interface SelectedSystemState {
  system: Sistema | null
}

const initialState: SelectedSystemState = {
  system: null
}

const selectedSystemSlice = createSlice({
  name: 'selectedSystem',
  initialState,
  reducers: {
    setSelectedSystem: (state, action: PayloadAction<Sistema>) => {
      state.system = action.payload
    }
  }
})

export const { setSelectedSystem } = selectedSystemSlice.actions
export const selectSelectedSystem = (state: RootState): SelectedSystemState => state.selectedSystem

export default selectedSystemSlice.reducer
