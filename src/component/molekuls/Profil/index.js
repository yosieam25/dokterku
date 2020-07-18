import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Profil = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.name}>Yosie Abdul Muzanil</Text>
      </View>
      <View style={styles.wrapperPhoto} />
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingTop: 32,
  },
  wrapperPhoto: {
    height: 70,
    width: 70,
    backgroundColor: '#BFD8FF',
    borderRadius: 70 / 2,
  },
  hello: {
    fontSize: 24,
    fontWeight: '600',
    opacity: 0.5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
