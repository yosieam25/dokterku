import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {ProfilMan} from '../../../assets';

const width = Dimensions.get('window').width;
const CardMessage = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={ProfilMan} style={styles.image} />
      <View style={styles.wrapperChat}>
        <Text style={styles.name}>Dr Ong Seong Woo</Text>
        <Text style={styles.chat}>Ada yang bisa dibantu? saya...</Text>
      </View>
    </View>
  );
};

export default CardMessage;

const styles = StyleSheet.create({
  wrapper: {
    width: width - 44,
    height: 65,
    backgroundColor: '#E3EEFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 20,
    paddingVertical: 8,
  },
  image: {
    width: 42,
    height: 48,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chat: {
    fontSize: 14,
    opacity: 0.5,
  },
  wrapperChat: {
    paddingLeft: 20,
    paddingTop: 3,
  },
});
