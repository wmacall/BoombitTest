import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './Header.styles';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

export const Header = ({
  title = 'Card Details',
  showBackButton = false,
}: HeaderProps) => {
  const {goBack} = useNavigation();
  const titleStyle: ViewStyle = {
    alignItems: showBackButton ? 'center' : undefined,
  };
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        {showBackButton ? (
          <TouchableOpacity style={styles.headerItem} onPress={goBack}>
            <Text>Back</Text>
          </TouchableOpacity>
        ) : null}
        <View style={[styles.headerItem, styles.titleItem, titleStyle]}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity style={[styles.headerItem, styles.drawerItem]}>
          <Text>Card Detail</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
