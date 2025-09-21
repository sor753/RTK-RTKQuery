import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';

export const getPost = createAsyncThunk<Post, { id: number }, { state: RootState; dispatch: AppDispatch; rejectValue: string }>('post/getPost', async ({ id }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data;
});

export const deletePost = createAsyncThunk<Post, { id: number }, { state: RootState; dispatch: AppDispatch; rejectValue: string }>('post/deletePost', async ({ id }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' });
  const data = await response.json();
  return data;
});

export const createPost = createAsyncThunk<Post, { values: Post }, { state: RootState; dispatch: AppDispatch; rejectValue: string }>('post/createPost', async ({ values }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: values.title, body: values.body }),
  });
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
    // getPost
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
    // deletePost
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state) => {
      state.loading = false;
      state.post = [];
      state.error = null;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.error = action.error.message || 'Something went wrong';
    });
    // createPost
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
      state.error = null;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});
