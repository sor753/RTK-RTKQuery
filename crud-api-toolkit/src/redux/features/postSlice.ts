import { createAsyncThunk, createSlice, type Action, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';

interface RejectedAction extends Action {
  error: Error;
  payload: string;
}

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
  body: string;
  edit: boolean;
};

export const getPost = createAsyncThunk<Post, { id: number }, { state: RootState; dispatch: AppDispatch; rejectValue: string }>('post/getPost', async ({ id }, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    }
    return rejectWithValue('An unknown error occurred');
  }
});

export const deletePost = createAsyncThunk<Post, { id: number }, { state: RootState; dispatch: AppDispatch; rejectValue: string }>('post/deletePost', async ({ id }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' });
  const data = await response.json();
  return data;
});

export const createPost = createAsyncThunk<Post, { values: { title: string; body: string } }, { state: RootState; dispatch: AppDispatch; rejectValue: string }>(
  'post/createPost',
  async ({ values }) => {
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
  }
);

export const updatePost = createAsyncThunk<Post, { id: number; title: string; body: string }, { state: RootState; dispatch: AppDispatch; rejectValue: string }>(
  'post/updatePost',
  async ({ id, title, body }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });
    const data = await response.json();
    return data;
  }
);

const isRejectedAction = (action: Action): action is RejectedAction => {
  return action.type.endsWith('rejected');
};

const isPendingAction = (action: Action): boolean => {
  return action.type.endsWith('pending');
};

const initialState: InitialState = {
  post: [],
  loading: false,
  error: null,
  body: '',
  edit: false,
};

export const { actions: postActions, reducer: postReducer } = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setEdit: (state: InitialState, action: PayloadAction<{ edit: boolean; body: string }>) => {
      state.edit = action.payload.edit;
      state.body = action.payload.body;
    },
  },
  extraReducers: (builder) => {
    // getPost
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
      state.error = null;
    });
    // deletePost
    builder.addCase(deletePost.fulfilled, (state) => {
      state.loading = false;
      state.post = [];
      state.error = null;
    });
    // createPost
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
      state.error = null;
    });
    // update
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
      state.error = null;
    });
    // pending
    builder.addMatcher(isPendingAction, (state) => {
      state.loading = true;
      state.error = null;
    });
    // error
    builder.addMatcher(isRejectedAction, (state, action) => {
      state.loading = false;
      state.post = [];
      state.error = action.payload || 'Something went wrong';
    });
  },
});
