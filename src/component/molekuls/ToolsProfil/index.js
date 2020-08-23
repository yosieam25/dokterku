import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconEditprofil, IconRightEditProfil} from '../../../assets';

const ToolsProfil = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 26,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
      }}>
      <View>
        <Image source={IconEditprofil} />
      </View>
      <View style={{alignSelf: 'center', flex: 1, paddingLeft: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Edit Profil</Text>
        <Text style={{opacity: 0.5}}>Last Update Yesterday</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Image source={IconRightEditProfil} />
      </View>
    </View>
  );
};

export default ToolsProfil;

const styles = StyleSheet.create({});
