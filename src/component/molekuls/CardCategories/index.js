import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  DokterUmum,
  DokterAnak,
  DokterPsikiater,
  DokterObat,
} from '../../../assets';

const CardCategories = ({title}) => {
  const Logo = () => {
    if (title === 'Dokter Umum') {
      return <Image source={DokterUmum} style={styles.image} />;
    }
    if (title === 'Dokter Anak') {
      return <Image source={DokterAnak} style={styles.image} />;
    }
    if (title === 'Dokter Psikiater') {
      return <Image source={DokterPsikiater} style={styles.image} />;
    }
    if (title === 'Dokter Obat') {
      return <Image source={DokterObat} style={styles.image} />;
    }
    return <Image source={DokterUmum} style={styles.image} />;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper2}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Logo />
    </View>
  );
};

export default CardCategories;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: 178,
  },
  wrapper2: {
    width: 178,
    height: 89,
    backgroundColor: '#E3EEFF',
    bottom: 0,
    position: 'absolute',
    borderRadius: 20,
  },
  image: {
    width: 42,
    height: 121,
    marginLeft: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    maxWidth: 89,
    marginTop: 12,
    marginLeft: 23,
  },
});
