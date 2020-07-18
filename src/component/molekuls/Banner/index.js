import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {BannerHome} from '../../../assets';

const width = Dimensions.get('window').width;
const Banner = () => {
  return (
    <View>
      <Image source={BannerHome} style={styles.banner} />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>Mau konsultasi dengan siapa hari ini?</Text>
        <Text style={styles.title2}>Kami siap membantu anda</Text>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    width: width - 44,
    height: 176,
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    maxWidth: 213,
  },
  wrapperContent: {
    position: 'absolute',
    top: 35,
    left: 23,
  },
  title2: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#70A0B2',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 17,
  },
});
