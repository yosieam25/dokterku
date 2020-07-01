import React from 'react';
import {View, Text, Image} from 'react-native';
import dokterku from '../../assets/logo/dokterku.png';

export default function SplashScreen() {
  return (
    <View>
      <Image source={dokterku} style={{width: 200, height: 200}} />
    </View>
  );
}
