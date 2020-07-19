import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Send} from '../../../assets';

const width = Dimensions.get('window').width;
const InputChat = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} placeholder="Ketik pesan anda" />
      <TouchableOpacity>
        <Image source={Send} />
      </TouchableOpacity>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 23,
  },
  input: {
    backgroundColor: '#EDEEF0',
    flex: 1,
    paddingLeft: 14,
    marginRight: 15,
  },
});
