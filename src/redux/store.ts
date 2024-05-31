import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import userLoggedSlice from './features/userLogged/userLoggedSlice'
import sistemasSlice from './features/sistemasSlice.ts' // Importa el slice de sistemas
import { idElementSelectedReducer } from './features/stateElementSelected/stateElementSelected.ts'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    userLogged: userLoggedSlice,
    sistemas: sistemasSlice, // Añade el slice de sistemas al store
    idElementSelected: idElementSelectedReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
