import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cocktailReducer } from './features/cocktailSlice';

const rootReducer = combineReducers({
  app: cocktailReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
