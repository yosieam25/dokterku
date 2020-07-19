import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {BGChat} from '../../assets';
import {Header, Input} from '../../component';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Chatting = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={BGChat} style={styles.background} />
      <View style={styles.header}>
        <Header type="chatting" />
      </View>
      <ScrollView>
        <Text>hai</Text>
      </ScrollView>
      <View style={styles.input}>
        <Input type="chatting" />
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    width: width,
  },
  header: {
    position: 'absolute',
  },
  input: {
    marginBottom: 20,
  },
});
