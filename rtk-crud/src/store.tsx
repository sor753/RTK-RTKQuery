import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { contactApi } from "./services/contactApi"

const rootReducer = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
})
