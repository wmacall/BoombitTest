import React from 'react';
import {Control, useController} from 'react-hook-form';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {COLORS} from '../../constants';
import {theme} from '../../utils';

interface LoginScreenValues {
  email: string;
  password: string;
}

interface InputProps extends TextInputProps {
  control: Control<LoginScreenValues, any>;
  name: keyof LoginScreenValues;
}

export const Input = ({control, name, ...rest}: InputProps) => {
  const {field, formState} = useController({
    control,
    name,
  });
  const {errors} = formState;
  const errorMessage = errors[field.name]?.message;
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        value={field.value}
        onChangeText={field.onChange}
        autoComplete="off"
        autoCapitalize="none"
        {...rest}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    marginBottom: theme.scaleHeight(20),
  },
  input: {
    paddingLeft: theme.scaleWidth(10),
    backgroundColor: COLORS.GRAY_200,
    width: theme.scaleWidth(300),
    height: theme.scaleHeight(40),
    fontSize: theme.scaleFont(16),
    borderRadius: theme.scaleWidth(10),
    color: COLORS.BLACK,
  },
  errorMessage: {
    color: COLORS.RED,
    fontSize: theme.scaleFont(12),
    marginTop: theme.scaleHeight(4),
  },
});
