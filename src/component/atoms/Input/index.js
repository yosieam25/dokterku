import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}> {label} </Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
  },
  input: {
    borderWidth: 1,
  },
});
