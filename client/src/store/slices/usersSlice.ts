import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'client/src/types';

const initialState: User[] = [{ name: 'מיכאל', status: 'אני עושה פרויקט' }];
// const initialState: User[] = [];

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
