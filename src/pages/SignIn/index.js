import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {BG_LI, Dokterku} from '../../assets';
import {Input} from '../../component';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SignIn = () => {
  return (
    <ScrollView style={{backgroundColor: 'pink'}}>
      <Image source={BG_LI} style={styles.page} />
      <View style={styles.container}>
        <Image source={Dokterku} />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <View style={styles.card}>
          <Input label="Email Address" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    width: width,
    height: height,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 29,
    width: 194,
    position: 'absolute',
    right: 0,
    top: 165,
    marginRight: 29,
  },
  card: {
    width: width - 50,
    height: height - 281,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 25,
    marginTop: 80,
  },
});
