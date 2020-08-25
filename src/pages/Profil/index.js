import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, ToolsProfil} from '../../component';
import {getData} from '../../utils';
import {UploadPhotoImg} from '../../assets';

const Profil = () => {
  const [profil, setProfil] = useState({
    fullName: '',
    job: '',
    photo: UploadPhotoImg,
  });
  useEffect(() => {
    getData('user').then(res => {
      console.log(res);
      const data = res;
      data.photo = {uri: data.photo};
      setProfil(data);
    });
  }, []);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Header title="Profil" />
        <Image
          source={profil.photo}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            backgroundColor: 'red',
            marginTop: 58,
          }}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 44}}>
          {profil.fullName}
        </Text>
        <Text style={{fontSize: 18, opacity: 0.5, marginTop: 7}}>
          {profil.job}
        </Text>
      </View>
      <View>
        <ToolsProfil />
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({});
