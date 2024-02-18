import React from 'react';
import {Pressable, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Icon, IconName} from '../Icon';
import styles from './BottomTabs.styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface BottomTabItemProps {
  isFocused?: boolean;
  onPress: () => void;
  name: string;
  iconName?: IconName;
}

export const BottomTabItem = ({
  isFocused = true,
  onPress,
  name = '',
  iconName = 'AboutIcon',
}: BottomTabItemProps) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const onPressIn = () => {
    scale.value = withSpring(0.9);
  };

  const onPressOut = () => {
    scale.value = withSpring(1);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
    opacity: opacity.value,
  }));
  const animatedStyleText = useAnimatedStyle(() => ({
    transform: [{translateY: isFocused ? withTiming(0) : withTiming(10)}],
    opacity: isFocused ? withTiming(1) : withTiming(0),
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.tab, animatedStyle]}>
      <View style={styles.icon}>
        <Icon name={iconName} />
      </View>
      <Animated.Text style={animatedStyleText}>{name}</Animated.Text>
    </AnimatedPressable>
  );
};
