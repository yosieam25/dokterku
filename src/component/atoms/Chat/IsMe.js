import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const IsMe = () => {
  return (
    <View>
      <Text style={styles.chat}>
        Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
      </Text>
      <Text style={styles.time}>04.00 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  chat: {
    width: '60%',
    backgroundColor: '#E3EEFF',
    padding: 12,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
    marginRight: 23,
    fontSize: 18,
  },
  time: {
    fontSize: 14,
    opacity: 0.5,
    alignSelf: 'flex-end',
    marginRight: 23,
    marginTop: 5,
  },
});
