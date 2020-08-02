import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Spacing} from '../../component';
import {useForm} from '../../utils/useForm';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullname: '',
    job: '',
    email: '',
    password: '',
  });
  const formRegis = () => {
    console.log(form());
  };
  return (
    <View>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
        title="Daftar Akun"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input label="Nama Lengkap" value={form.fullname} />
          <Spacing height={27} />
          <Input label="Pekerjaan" />
          <Spacing height={27} />
          <Input label="Email" />
          <Spacing height={27} />
          <Input label="Password" type={true} />
          <Spacing height={39} />
          <View style={styles.containerButton}>
            <Button title="Sign Up" onPress={formRegis} />
          </View>
        </View>
      </ScrollView>
    </View>
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
