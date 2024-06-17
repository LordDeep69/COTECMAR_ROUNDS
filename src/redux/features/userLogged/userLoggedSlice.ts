import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export enum UserRole {
  Admin = 'admin',
  Cliente = 'cliente'
}

export interface UserLoggedState { // Asegurándonos de exportar el tipo
  id: number | null
  email: string | null
  password: string | null
  role: UserRole | null
  nombre: string | null
  foto_perfil: string | null
}

const initialState: UserLoggedState = {
  id: null,
  email: null,
  password: null,
  role: null,
  nombre: null,
  foto_perfil: null
}

const loadFromLocalStorage = (): UserLoggedState => {
  const data = localStorage.getItem('userLogged')
  return data ? JSON.parse(data) : initialState
}

const saveToLocalStorage = (state: UserLoggedState) => {
  localStorage.setItem('userLogged', JSON.stringify(state))
}

export const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState: loadFromLocalStorage(),
  reducers: {
    setUserLogged: (state, action: PayloadAction<UserLoggedState>) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.password = action.payload.password
      state.role = action.payload.role
      state.nombre = action.payload.nombre
      state.foto_perfil = action.payload.foto_perfil
      saveToLocalStorage(state)
    },
    clearUserLogged: (state) => {
      state.id = null
      state.email = null
      state.password = null
      state.role = null
      state.nombre = null
      state.foto_perfil = null
      localStorage.removeItem('userLogged')
    }
  }
})

export const { setUserLogged, clearUserLogged } = userLoggedSlice.actions

export const selectUserLogged = (state: RootState): UserLoggedState => state.userLogged

export default userLoggedSlice.reducer
