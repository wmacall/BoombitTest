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
import {BackArrowIcon, HamburgerIcon} from '../../assets';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onOpenDrawer: () => void;
}

export const Header = ({
  title = 'Card Details',
  showBackButton = false,
  onOpenDrawer,
}: HeaderProps) => {
  const {goBack} = useNavigation();
  const titleStyle: ViewStyle = {
    alignItems: showBackButton ? 'center' : undefined,
  };
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        {showBackButton ? (
          <TouchableOpacity style={styles.headerItem} onPress={goBack}>
            <BackArrowIcon />
          </TouchableOpacity>
        ) : null}
        <View style={[styles.headerItem, styles.titleItem, titleStyle]}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity
          onPress={onOpenDrawer}
          style={[styles.headerItem, styles.drawerItem]}>
          <HamburgerIcon />
        </TouchableOpacity>
      </View>
    </>
  );
};
