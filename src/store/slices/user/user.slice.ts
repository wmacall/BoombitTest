import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SetUserPayload, UserState} from './user.slice.types';

const initialState: UserState = {
  email: '',
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onSetUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.email = action.payload.email;
      state.isLogged = true;
    },
    onClearUser: () => initialState,
  },
});
export const {onSetUser, onClearUser} = userSlice.actions;
export default userSlice.reducer;
