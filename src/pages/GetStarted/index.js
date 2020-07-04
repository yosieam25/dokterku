import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Assets1} from '../../assets';
import {Button} from '../../component';

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <View style={{alignItems: 'center'}}>
        <Image source={Assets1} style={styles.image} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel{' '}
        </Text>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 45}}>
        <Button title="Get Started" />
        <View style={{height: 16}} />
        <Button title="Sign In" type="secondary" />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: 348,
    height: 259,
    marginTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    width: 305,
    marginTop: 74,
  },
});
