import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {BGDetailDoctor, BackIconDetailDoctor} from '../../../assets';
import {Spacing} from '../../atoms';

const HeaderDetailDoctor = () => {
  return (
    <View>
      <Image source={BGDetailDoctor} style={styles.bg} />
      <View style={styles.bgicon}>
        <Image source={BackIconDetailDoctor} style={styles.icon} />
        <View style={styles.add} />
      </View>
    </View>
  );
};

export default HeaderDetailDoctor;

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 300,
  },
  bgicon: {
    width: '100%',
    height: 300,
    position: 'absolute',
    justifyContent: 'space-between',
  },
  icon: {
    width: 50,
    height: 40,
    marginLeft: 15,
    marginTop: 10,
  },
  add: {
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
