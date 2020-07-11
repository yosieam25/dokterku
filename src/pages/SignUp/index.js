import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackIcon} from '../../assets';
import {Input, Spacing, Button} from '../../component';

const SignUp = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <BackIcon
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.title}>Daftar Akun</Text>
      </View>
      <View style={styles.container}>
        <Input label="Nama Lengkap" />
        <Spacing height={27} />
        <Input label="Pekerjaan" />
        <Spacing height={27} />
        <Input label="Email" />
        <Spacing height={27} />
        <Input label="Password" type={true} />
        <Spacing height={39} />
        <View style={{alignItems: 'center'}}>
          <Button title="Sign Up" />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 18,
    paddingLeft: 14,
    paddingRight: 25,
    backgroundColor: '#BFD8FF',
  },
  title: {
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
  },
  container: {
    marginHorizontal: 47,
    marginTop: 39,
  },
});
