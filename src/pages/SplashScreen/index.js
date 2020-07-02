import React from 'react';
import {View, Image} from 'react-native';
import dokterku from '../../assets/logo/dokterku.png';

export default function SplashScreen() {
  return (
    <View>
      <Image source={dokterku} />
    </View>
  );
}
