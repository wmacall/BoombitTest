import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from './HomeScreen.types';
import {HomeStackRoutes} from '../../../routes';

export const HomeScreen = () => {
  const {navigate} = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() =>
          navigate(HomeStackRoutes.DETAIL, {
            id: '123',
          })
        }
        title="Navigate to detail"
      />
    </View>
  );
};
