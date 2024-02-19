import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useYupValidationResolver} from '../../../hooks';
import {loginSchema} from '../../../utils';
import styles from './LoginScreen.styles';
import {Input} from '../../../components';

interface LoginScreenValues {
  email: string;
  password: string;
}

export const LoginScreen = () => {
  const resolver = useYupValidationResolver(loginSchema);
  const {control, handleSubmit} = useForm<LoginScreenValues>({
    resolver,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLogin: SubmitHandler<LoginScreenValues> = values => {};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.containerLogin}>
        <Text style={styles.heading}>Sign In</Text>
        <Input placeholder="Email Address" name="email" control={control} />
        <Input placeholder="Enter Password" name="password" control={control} />
        <TouchableOpacity
          testID="ls_button"
          onPress={handleSubmit(onLogin)}
          style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
