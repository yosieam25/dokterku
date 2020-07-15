import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackIcon} from '../../../assets';

const Header = ({onPress, title}) => {
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