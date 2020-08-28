import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Spacing, Loading} from '../../component';
import {FireBase} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {useForm, storeData, getData} from '../../utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });
  const [nilai, setNilai] = useState(false);
  const formRegis = () => {
    console.log(form);
    setNilai(true);
    FireBase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setNilai(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          job: form.job,
          email: form.email,
          uid: success.user.uid,
        };
        FireBase.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log('success', success);
      })
      .catch(error => {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log('error: ', errorMessage);
        setNilai(false);
        showMessage({
          message: errorMessage,
          backgroundColor: 'red',
          color: 'white',
        });
        // ...
      });
  };
  return (
    <>
      <View style={{flex: 1}}>
        <Header
          onPress={() => {
            navigation.goBack();
          }}
          title="Daftar Akun"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Input
              label="Nama Lengkap"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Spacing height={27} />
            <Input
              label="Pekerjaan"
              value={form.job}
              onChangeText={value => setForm('job', value)}
            />
            <Spacing height={27} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Spacing height={27} />
            <Input
              label="Password"
              type={true}
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
            <Spacing height={39} />
            <View style={styles.containerButton}>
              <Button title="Sign Up" onPress={formRegis} />
            </View>
          </View>
        </ScrollView>
      </View>
      {nilai && <Loading />}
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 47,
    marginTop: 39,
  },
  containerButton: {
    alignItems: 'center',
  },
});
