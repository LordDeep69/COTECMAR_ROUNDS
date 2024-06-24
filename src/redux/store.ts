// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import userLoggedSlice from './features/userLogged/userLoggedSlice'
import { idElementSelectedReducer } from './features/stateElementSelected/stateElementSelected.ts'
import selectedSystemReducer from './features/selectedSystemSlice'
import selectedRoundReducer from './features/selectedRoundSlice.ts'
import registeredEquipmentReducer from './features/registeredEquipmentSlice.ts'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    userLogged: userLoggedSlice,
    idElementSelected: idElementSelectedReducer,
    selectedSystem: selectedSystemReducer,
    selectedRound: selectedRoundReducer,
    registeredEquipment: registeredEquipmentReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
