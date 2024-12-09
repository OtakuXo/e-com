import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/authSclce'

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

// Infer the type of store
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']