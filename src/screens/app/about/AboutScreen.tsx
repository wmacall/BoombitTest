import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Header} from '../../../components';
import {AppStackRouter, AppStackRoutes} from '../../../routes';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import logo from '../../../assets/img/logo.png';
import styles from './AboutScreen.styles';

interface AboutScreenProps {
  navigation: DrawerNavigationProp<AppStackRouter, AppStackRoutes.BOTTOM_STACK>;
}

export const AboutScreen = ({navigation}: AboutScreenProps) => {
  const onOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Header onOpenDrawer={onOpenDrawer} title="About" />
      <ScrollView bounces={false}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.heading}>Boombit Test</Text>
        <Text style={styles.description}>
          An application built with React Native, JavaScript, and TypeScript.
          Animations were implemented using Reanimated. Redux Persist was used
          to achieve data persistence when exiting the application and simulate
          the login process.
        </Text>
        <Text style={styles.description}>
          React Native SVG was utilized for the icons. To simulate form usage,
          Yup was employed in conjunction with React Hook Form. For navigation
          throughout the entire app, React Navigation was used.
        </Text>
      </ScrollView>
    </View>
  );
};
