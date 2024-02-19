import {HomeStackRouter, HomeStackRoutes} from '../../../routes';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export interface HomeScreenNavigationProp {
  navigation: DrawerNavigationProp<HomeStackRouter, HomeStackRoutes.HOME>;
}
