import React from 'react';
import {AppRoutes, AuthRoutes} from '../../routes';
import {useSelector} from 'react-redux';
import {isUserLoggedSelector} from '../../store/slices/user/user.selector';

export const SplashScreen = () => {
  const isUserLogged = useSelector(isUserLoggedSelector);
  return isUserLogged ? <AppRoutes /> : <AuthRoutes />;
};
