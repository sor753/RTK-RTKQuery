import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';

export const getPost = createAsyncThunk<Post, { id: number }, { state: RootState; dispatch: AppDispatch; rejectValue: string }>('post/getPost', async ({ id }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data;
});

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type InitialState = {
  post: Post[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  post: [],
  loading: false,
  error: null,
};

export const { actions: postActions, reducer: postReducer } = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
      state.error = null;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});
