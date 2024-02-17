import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackRouter, HomeStackRoutes} from '../../../routes';

export type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackRouter,
  HomeStackRoutes.HOME
>;
