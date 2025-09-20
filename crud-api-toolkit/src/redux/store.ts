import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postReducer } from './features/postSlice';

const rootReducer = combineReducers({
  app: postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
