import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import userLoggedSlice from './features/userLogged/userLoggedSlice'
import { idElementSelectedReducer } from './features/stateElementSelected/stateElementSelected.ts'
import selectedSystemReducer from './features/selectedSystemSlice'
import selectedRoundReducer from './features/selectedRoundSlice.ts'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    userLogged: userLoggedSlice,
    idElementSelected: idElementSelectedReducer,
    selectedSystem: selectedSystemReducer,
    selectedRound: selectedRoundReducer

  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
