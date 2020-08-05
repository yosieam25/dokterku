import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Spacing} from '../../component';
import {useForm} from '../../utils/useForm';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });
  const formRegis = () => {
    console.log(form);
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
