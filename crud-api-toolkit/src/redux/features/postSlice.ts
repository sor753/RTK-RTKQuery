import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPost = createAsyncThunk('post/getPost', async ({ id }: { id: number }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data;
});

type initialState = {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  loading: boolean;
  error: string | null;
};

const initialState: initialState = {
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
