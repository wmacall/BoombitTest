import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {COLORS, drawerOptions} from '../../constants';
import {theme} from '../../utils';

export const DrawerItems = ({}: DrawerContentComponentProps) => {
  return (
    <View>
      <SafeAreaView />
      {drawerOptions.map((item, index) => (
        <TouchableOpacity style={styles.container} key={index}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 0.2,
    borderColor: COLORS.GRAY,
    height: theme.scaleHeight(50),
    justifyContent: 'center',
    paddingLeft: theme.scaleWidth(20),
  },
});
