import { register, login, logout, refreshUser } from './operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { pendingReducer, rejectedReducer, fulfilledReducer } from './reducers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const extraActions = [register, login, logout, refreshUser];
const getActions = type =>
  isAnyOf(
    ...extraActions.map(action => {
      return action[type];
    })
  );

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer)
      .addMatcher(getActions('rejected'), rejectedReducer),
});

export const authReducer = authSlice.reducer;
