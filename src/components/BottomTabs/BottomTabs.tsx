import React from 'react';
import {View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './BottomTabs.styles';
import {BottomTabItem} from './BottomTabItem';
import {BottomNavigatorRoutes} from '../../routes';

export const BottomTabs = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <BottomTabItem
        name="Home"
        iconName="HomeIcon"
        onPress={() => {
          navigation.navigate(BottomNavigatorRoutes.HOME_STACK);
        }}
        isFocused={state.index === 0}
      />
      <BottomTabItem
        name="About"
        iconName="AboutIcon"
        onPress={() => {
          navigation.navigate(BottomNavigatorRoutes.ABOUT);
        }}
        isFocused={state.index === 1}
      />
    </View>
  );
};
