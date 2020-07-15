import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({label, type}) => {
  return (
    <View>
      <Text style={styles.label}> {label} </Text>
      <TextInput secureTextEntry={type} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    opacity: 0.5,
  },
  input: {
    borderWidth: 1,
    marginTop: 13,
    paddingLeft: 15,
    fontSize: 25,
    borderRadius: 15,
  },
});