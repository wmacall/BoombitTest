import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import {HomeStackRouter, HomeStackRoutes} from '../../../../routes';

export type DetailScreenRouteProp = RouteProp<
  HomeStackRouter,
  HomeStackRoutes.DETAIL
>;

export interface DetailScreenNavigationProp {
  navigation: DrawerNavigationProp<HomeStackRouter, HomeStackRoutes.DETAIL>;
}
