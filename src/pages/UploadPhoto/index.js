import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AddPhoto, UploadPhotoImg} from '../../assets';
import {Anchor, Button, Header, Spacing} from '../../component';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(UploadPhotoImg);
  const ImageUpload = () => {
    ImagePicker.launchImageLibrary({}, response => {
      if (response.didCancel || response.error) {
        showMessage({
          message: 'Anda belum mengupload photo anda!',
          backgroundColor: '#ADD8E6',
          color: 'white',
        });
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };
  return (
    <View style={styles.content}>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        title="Photo Profil"
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.border} onPress={ImageUpload}>
          <Image source={photo} style={styles.ImageUpload} />
          <Image source={AddPhoto} style={styles.imageAdd} />
        </TouchableOpacity>
        <Text style={styles.name}>Yosie Abdul Muzanil</Text>
        <Text style={styles.job}>FrontEnd Progammer</Text>
      </View>
      <View style={styles.comtainerButton}>
        <Button title="continue" disable={!hasPhoto} />
        <Spacing height={26} />
        <Anchor title="Skip for this" />
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  content: {justifyContent: 'space-between', flex: 1},
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
  comtainerButton: {
    alignItems: 'center',
    paddingBottom: 58,
  },
});
