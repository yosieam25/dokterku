import React, {useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Dokterku_logo} from '../../assets';

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      console.log('hai');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <Image source={Dokterku_logo} style={styles.logo} />
      <Text style={styles.title}>DokterKu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 128,
    height: 128,
  },
  title: {
    fontWeight: 'bold',
    color: '#70A0B2',
    fontSize: 24,
  },
});
