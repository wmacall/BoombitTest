export enum BottomNavigatorRoutes {
  HOME_STACK = 'HomeStack',
  ABOUT = 'AboutScreen',
}

export type BottomNavigatorRouter = {
  [BottomNavigatorRoutes.HOME_STACK]: undefined;
  [BottomNavigatorRoutes.ABOUT]: undefined;
};

export enum HomeStackRoutes {
  HOME = 'HomeScreen',
  DETAIL = 'DetailScreen',
}

export type HomeStackRouter = {
  [HomeStackRoutes.HOME]: undefined;
  [HomeStackRoutes.DETAIL]: {id: string};
};

export enum AppStackRoutes {
  BOTTOM_STACK = 'BottomStack',
}

export type AppStackRouter = {
  [AppStackRoutes.BOTTOM_STACK]: undefined;
};
