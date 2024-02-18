import React from 'react';
import {View} from 'react-native';
import {Header} from '../../../components';

export const AboutScreen = ({navigation}) => {
  const onOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <Header onOpenDrawer={onOpenDrawer} title="About" />
    </View>
  );
};
