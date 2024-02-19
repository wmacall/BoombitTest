import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../..';

const getUser = (state: RootState) => state.user;
export const isUserLoggedSelector = createSelector(
  getUser,
  user => user.isLogged,
);
