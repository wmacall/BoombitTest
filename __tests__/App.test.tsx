import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import {LoginScreen} from '../src/screens/auth/login/LoginScreen';

describe('Login Screen tests ', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<LoginScreen />);

    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByPlaceholderText('Enter Password')).toBeTruthy();
  });

  it('should call the sign in button when the fields are correct', async () => {
    const {getByPlaceholderText, getByTestId} = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email Address');
    const passwordInput = getByPlaceholderText('Enter Password');
    const signInButton = getByTestId('ls_button');
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.press(signInButton);
  });

  it('should show the errors when fields are empty', async () => {
    const {getByTestId, getByText} = render(<LoginScreen />);
    const signInButton = getByTestId('ls_button');

    await act(async () => {
      fireEvent.press(signInButton);
      await waitFor(() => {
        expect(getByText('Email is required')).toBeTruthy();
        expect(getByText('Password is required')).toBeTruthy();
      });
    });
  });
});
