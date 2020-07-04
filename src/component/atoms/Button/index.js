import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.title(type)}> {title} </Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: type => ({
    color: type == 'secondary' ? 'black' : 'white',
    fontSize: 18,
  }),
  container: type => ({
    backgroundColor: type == 'secondary' ? '#BFD8FF' : '#70A0B2',
    width: 305,
    height: 47,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
