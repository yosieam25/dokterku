import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Anchor} from '../../component';
import {UploadPhotoImg, AddPhoto} from '../../assets';

const UploadPhoto = ({navigation}) => {
  return (
    <View>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        title="Photo Profil"
      />
      <View style={styles.container}>
        <View style={styles.border}>
          <Image source={UploadPhotoImg} style={styles.ImageUpload} />
          <Image source={AddPhoto} style={styles.imageAdd} />
        </View>
        <Text style={styles.name}>Yosie Abdul Muzanil</Text>
        <Text style={styles.job}>FrontEnd Progammer</Text>
      </View>
      <View>
        <Button title="continue" />
        <Anchor title="Skip for this" />
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  ImageUpload: {
    width: 150,
    height: 150,
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
  container: {
    alignItems: 'center',
  },
  name: {
    fontSize: 27,
    marginTop: 47,
  },
  job: {
    fontSize: 18,
    opacity: 0.5,
    marginTop: 10,
  },
});
