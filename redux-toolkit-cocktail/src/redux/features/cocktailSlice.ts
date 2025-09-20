import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../store';

type InitialState = {
  drinks: { [key: string]: string }[];
  cocktail: { [key: string]: string }[];
  loading: boolean;
  error: string | null;
};

// 参考：https://the2g.com/post/rejected-type-of-redux-thunk
// 参考：https://redux-toolkit.js.org/usage/usage-with-typescript#typing-the-thunkapi-object
export const fetchCocktails = createAsyncThunk<
  // Return type of the payload creator
  InitialState,
  // First argument to the payload creator
  void,
  {
    // Optional fields for defining thunkApi field types
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: { message: string };
  }
>('cocktails/fetchCocktails', async () => {
  return fetch('https://www.thecocktaildb.com/api/json/v2/1/search.php?s=').then((res) => res.json());
});

export const fetchSingleCocktail = createAsyncThunk<
  InitialState,
  { id: string },
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: { message: string };
  }
>('cocktails/fetchSingleCocktail', async ({ id }) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/1/search.php?s=${id}`).then((res) => res.json());
});

const initialState: InitialState = {
  drinks: [],
  cocktail: [],
  loading: false,
  error: null,
};

export const { actions: cocktailActions, reducer: cocktailReducer } = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetchCocktails
    builder.addCase(fetchCocktails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      state.drinks = action.payload.drinks;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCocktails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || '予期せぬエラー';
    });
    // fetchSingleCocktail
    builder.addCase(fetchSingleCocktail.pending, (state) => {
      state.loading = true;
    });
    //
    builder.addCase(fetchSingleCocktail.fulfilled, (state, action) => {
      state.drinks = action.payload.drinks;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchSingleCocktail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || '予期せぬエラー';
    });
  },
});
