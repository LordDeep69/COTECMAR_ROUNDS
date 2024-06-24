import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../store'

interface SelectedRoundState {
  id: string | null
}

const initialState: SelectedRoundState = {
  id: null
}

const selectedRoundSlice = createSlice({
  name: 'selectedRound',
  initialState,
  reducers: {
    setSelectedRoundId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    clearSelectedRoundId: (state) => {
      state.id = null
    }
  }
})

export const { setSelectedRoundId, clearSelectedRoundId } = selectedRoundSlice.actions

export const selectSelectedRoundId = (state: RootState) => state.selectedRound.id

export default selectedRoundSlice.reducer
