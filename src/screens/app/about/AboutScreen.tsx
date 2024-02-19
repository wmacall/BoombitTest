import React from 'react';
import {View} from 'react-native';
import {Header} from '../../../components';
import {AppStackRouter, AppStackRoutes} from '../../../routes';
import {DrawerNavigationProp} from '@react-navigation/drawer';

interface AboutScreenProps {
  navigation: DrawerNavigationProp<AppStackRouter, AppStackRoutes.BOTTOM_STACK>;
}

export const AboutScreen = ({navigation}: AboutScreenProps) => {
  const onOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <Header onOpenDrawer={onOpenDrawer} title="About" />
    </View>
  );
};
