import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ToolsProfil} from '../../component';
import {getData} from '../../utils';

const Profil = () => {
  useEffect(() => {
    getData('user').then(res => {
      console.log(res);
    });
  }, []);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Header title="Profil" />
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            backgroundColor: 'red',
            marginTop: 58,
          }}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 44}}>
          Yosie Abdul Muzanil
        </Text>
        <Text style={{fontSize: 18, opacity: 0.5, marginTop: 7}}>
          Frontend Developer
        </Text>
      </View>
      <View>
        <ToolsProfil />
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({});
