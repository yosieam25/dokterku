import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackIcon} from '../../../assets';
import HeaderChatting from './HeaderChatting';
import HeaderDetailDoctor from './HeaderDetailDoctor';

const Header = ({onPress, title, type}) => {
  if (type === 'chatting') {
    return <HeaderChatting onPress={onPress} />;
  }
  if (type === 'detaildoctor') {
    return <HeaderDetailDoctor />;
  }
  return (
    <View style={styles.header}>
      <BackIcon onPress={onPress} />
      <Text style={styles.title}> {title} </Text>
    </View>
  );
};

export default Header;

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
});
