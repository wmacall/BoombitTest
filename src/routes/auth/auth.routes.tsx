import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AuthStackRouter, AuthStackRoutes} from './auth.routes.types';
import {LoginScreen} from '../../screens';
const AuthNavigator = createStackNavigator<AuthStackRouter>();

export const AuthRoutes = () => {
  return (
    <AuthNavigator.Navigator initialRouteName={AuthStackRoutes.LOGIN_SCREEN}>
      <AuthNavigator.Screen
        options={{
          headerShown: false,
        }}
        name={AuthStackRoutes.LOGIN_SCREEN}
        component={LoginScreen}
      />
    </AuthNavigator.Navigator>
  );
};
