import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../store';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

const TestWrapper = ({children}: PropsWithChildren) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>{children}</NavigationContainer>
    </PersistGate>
  </Provider>
);

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, {wrapper: TestWrapper, ...options});

export {customRender};
