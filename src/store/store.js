import { configureStore, createSlice } from '@reduxjs/toolkit';

// User Slice
const userSlice = createSlice({
  name: 'user',
  initialState: { email: null, password: null },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

// Store configuration
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
