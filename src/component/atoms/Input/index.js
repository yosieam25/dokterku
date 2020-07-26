import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import InputChat from './InputChat';

const Input = ({label, type, value, onChangeText}) => {
  const [border, setBorder] = useState('black');
  const onFocus = () => {
    setBorder('#BFD8FF');
  };
  const onBlur = () => {
    setBorder('black');
  };
  if (type === 'chatting') {
    return <InputChat />;
  }
  return (
    <View>
      <Text style={styles.label}> {label} </Text>
      <TextInput
        secureTextEntry={type}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    opacity: 0.5,
  },
  input: border => ({
    borderWidth: 2,
    marginTop: 13,
    paddingLeft: 15,
    fontSize: 25,
    borderRadius: 15,
    borderColor: border,
  }),
});
