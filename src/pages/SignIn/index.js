import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {BG_LI, Dokterku} from '../../assets';
import {Anchor, Button, Input, Spacing} from '../../component';
import {useForm, storeData} from '../../utils';
import {FireBase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const signIn = () => {
    FireBase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('data:', res);
        FireBase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB);
            }
          });
        navigation.replace('MainApp');
      })
      .catch(error => {
        var errorMessage = error.message;
        showMessage({
          message: errorMessage,
          backgroundColor: 'red',
          color: 'white',
        });
      });
  };
  return (
    <View>
      <Image source={BG_LI} style={styles.page} />
      <View style={styles.container}>
        <Image source={Dokterku} />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <View style={styles.card}>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Spacing height={24} />
          <Input
            label="Password"
            type={true}
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Spacing height={24} />
          <Anchor title="Lupa Password" />
          <Spacing height={33} />
          <View style={{alignItems: 'center'}}>
            <Button title="Sign In" onPress={signIn} />
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
