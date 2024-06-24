import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface RegisteredEquipmentState {
  registeredEquipments: number[]
}

const initialState: RegisteredEquipmentState = {
  registeredEquipments: []
}

const registeredEquipmentSlice = createSlice({
  name: 'registeredEquipment',
  initialState,
  reducers: {
    addRegisteredEquipment: (state, action: PayloadAction<number>) => {
      state.registeredEquipments.push(action.payload)
      sessionStorage.setItem('registeredEquipments', JSON.stringify(state.registeredEquipments))
    },
    setRegisteredEquipments: (state, action: PayloadAction<number[]>) => {
      state.registeredEquipments = action.payload
    },
    clearRegisteredEquipments: (state) => {
      state.registeredEquipments = []
      sessionStorage.removeItem('registeredEquipments')
    }
  }
})

export const { addRegisteredEquipment, setRegisteredEquipments, clearRegisteredEquipments } = registeredEquipmentSlice.actions

export default registeredEquipmentSlice.reducer
