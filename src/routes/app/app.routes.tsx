import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeStackRouter,
  HomeStackRoutes,
  BottomNavigatorRouter,
  BottomNavigatorRoutes,
  AppStackRouter,
  AppStackRoutes,
} from './app.routes.types';
import {AboutScreen, DetailScreen, HomeScreen} from '../../screens';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {BottomTabs, DrawerItems} from '../../components';

const HomeStackNavigator = createStackNavigator<HomeStackRouter>();
const BottomNavigator = createBottomTabNavigator<BottomNavigatorRouter>();
const AppNavigator = createDrawerNavigator<AppStackRouter>();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={HomeStackRoutes.HOME}>
      <HomeStackNavigator.Screen
        name={HomeStackRoutes.HOME}
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
        name={HomeStackRoutes.DETAIL}
        component={DetailScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

const BottomTabMenu = (props: BottomTabBarProps) => <BottomTabs {...props} />;
const BottomStack = () => {
  return (
    <BottomNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={BottomTabMenu}
      initialRouteName={BottomNavigatorRoutes.HOME_STACK}>
      <BottomNavigator.Screen
        name={BottomNavigatorRoutes.HOME_STACK}
        component={HomeStack}
      />
      <BottomNavigator.Screen
        name={BottomNavigatorRoutes.ABOUT}
        component={AboutScreen}
      />
    </BottomNavigator.Navigator>
  );
};

const DrawerMenu = (props: DrawerContentComponentProps) => (
  <DrawerItems {...props} />
);
export const AppRoutes = () => {
  return (
    <AppNavigator.Navigator
      drawerContent={DrawerMenu}
      initialRouteName={AppStackRoutes.BOTTOM_STACK}>
      <AppNavigator.Screen
        options={{
          headerShown: false,
        }}
        name={AppStackRoutes.BOTTOM_STACK}
        component={BottomStack}
      />
    </AppNavigator.Navigator>
  );
};
