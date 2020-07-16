import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {BG_LI, Dokterku} from '../../assets';
import {Anchor, Button, Input, Spacing} from '../../component';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SignIn = ({navigation}) => {
  return (
    <View>
      <Image source={BG_LI} style={styles.page} />
      <View style={styles.container}>
        <Image source={Dokterku} />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <View style={styles.card}>
          <Input label="Email Address" />
          <Spacing height={24} />
          <Input label="Password" type={true} />
          <Spacing height={24} />
          <Anchor title="Lupa Password" />
          <Spacing height={33} />
          <View style={{alignItems: 'center'}}>
            <Button
              title="Sign In"
              onPress={() => {
                navigation.replace('MainApp');
              }}
            />
            <Spacing height={24} />
            <Anchor title="Create New Account" type="secondary" />
          </View>
        </View>
      </View>
    </View>
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
    top: 195,
    marginRight: 29,
  },
  card: {
    width: width - 50,
    height: height - 281,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 25,
    marginTop: 80,
    paddingHorizontal: 22,
    paddingVertical: 32,
  },
});
