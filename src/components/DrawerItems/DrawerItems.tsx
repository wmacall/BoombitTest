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
import {useDispatch} from 'react-redux';
import {onClearUser} from '../../store/slices/user';
import {onClearCard} from '../../store';

export const DrawerItems = ({navigation}: DrawerContentComponentProps) => {
  const dispatch = useDispatch();

  const onPressLogOut = () => {
    dispatch(onClearUser());
    dispatch(onClearCard());
    navigation.closeDrawer();
  };
  return (
    <View>
      <SafeAreaView />
      {drawerOptions.map((item, index) => (
        <TouchableOpacity
          onPress={onPressLogOut}
          style={styles.container}
          key={index}>
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
