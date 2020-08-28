import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Header, Input} from '../../component';
import {AddPhoto, UploadPhotoImg} from '../../assets';
import {getData} from '../../utils';

const EditProfil = () => {
  const [profil, setProfil] = useState({
    fullName: '',
    job: '',
    email: '',
    photo: UploadPhotoImg,
    password: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      console.log(res);
      const data = res;
      data.photo = {uri: res.photo};
      setProfil(data);
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Edit Profil" />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.border}>
          <Image source={profil.photo} style={styles.ImageUpload} />
          <Image source={AddPhoto} style={styles.imageAdd} />
        </TouchableOpacity>
      </View>
      <Input label="Fullname" value={profil.fullName} />
      <Input label="Pekerjaan" value={profil.job} />
      <Input label="Email" value={profil.email} />
    </View>
  );
};

export default EditProfil;

const styles = StyleSheet.create({
  ImageUpload: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  imageAdd: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  border: {
    borderWidth: 1,
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
