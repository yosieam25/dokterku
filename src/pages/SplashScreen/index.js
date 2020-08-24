import React, {useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Dokterku_logo} from '../../assets';
import {FireBase} from '../../config';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      FireBase.auth().onAuthStateChanged(user => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, [navigation]);
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
