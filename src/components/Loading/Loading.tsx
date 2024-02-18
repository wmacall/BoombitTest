import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants';
import {theme} from '../../utils';

export const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={COLORS.BLACK} />
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: theme.scaleFont(14),
  },
});
