import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Others = () => {
  return (
    <View>
      <Text style={styles.chat}>
        Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
      </Text>
      <Text style={styles.time}>04.00 AM</Text>
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  chat: {
    width: '60%',
    backgroundColor: '#0BCAD4',
    padding: 12,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    fontSize: 18,
    marginLeft: 23,
  },
  time: {
    fontSize: 14,
    opacity: 0.5,
    marginTop: 5,
    marginLeft: 23,
  },
});
