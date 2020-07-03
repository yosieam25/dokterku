import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Dokterku from '../../assets/logo/dokterku.png';

export default function SplashScreen() {
  return (
    <View>
      <Image source={Dokterku} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    with: 300,
    height: 300,
  },
});
