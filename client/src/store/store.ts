import { configureStore } from '@reduxjs/toolkit';
import { usersListReducer, usersReducer } from './slices';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    usersList: usersListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
