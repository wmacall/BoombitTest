import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NotFoundImage from '../../assets/img/not_found.png';
import {theme} from '../../utils';

export const NotFound = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={NotFoundImage} />
      <Text style={styles.title}>Card not found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: theme.scaleHeight(300),
    width: theme.scaleWidth(300),
  },
  title: {
    fontSize: theme.scaleFont(24),
  },
});
