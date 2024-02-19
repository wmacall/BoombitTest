import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import {AppRoutes, AuthRoutes} from '../../routes';
import {isUserLoggedSelector} from '../../store/slices/user/user.selector';

export const SplashScreen = () => {
  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  const isUserLogged = useSelector(isUserLoggedSelector);
  return isUserLogged ? <AppRoutes /> : <AuthRoutes />;
};
