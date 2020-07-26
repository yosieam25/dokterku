import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Spacing} from '../../component';

const SignUp = ({navigation}) => {
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
          <Input label="Nama Lengkap" />
          <Spacing height={27} />
          <Input label="Pekerjaan" />
          <Spacing height={27} />
          <Input label="Email" />
          <Spacing height={27} />
          <Input label="Password" type={true} />
          <Spacing height={39} />
          <View style={styles.containerButton}>
            <Button
              title="Sign Up"
              onPress={() => {
                navigation.navigate('UploadPhoto');
              }}
            />
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
