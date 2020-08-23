import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {UploadPhoto} from '../../../assets';
import {getData} from '../../../utils';

const Profil = ({onPress}) => {
  const [profil, setProfil] = useState({
    fullName: '',
    job: '',
    photo: UploadPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      console.log('data', res);
      const data = res;
      data.photo = {uri: data.photo};
      setProfil(data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.name}>{profil.fullName}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image source={profil.photo} style={styles.wrapperPhoto} />
      </TouchableOpacity>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingTop: 32,
  },
  wrapperPhoto: {
    height: 70,
    width: 70,
    backgroundColor: '#BFD8FF',
    borderRadius: 70 / 2,
  },
  hello: {
    fontSize: 24,
    fontWeight: '600',
    opacity: 0.5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
