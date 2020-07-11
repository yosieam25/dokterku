import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Anchor = ({title, type}) => {
  return (
    <View>
      <Text style={styles.title(type)}> {title} </Text>
    </View>
  );
};

export default Anchor;

const styles = StyleSheet.create({
  title: type => ({
    fontSize: 25,
    opacity: 0.5,
    textDecorationLine: 'underline',
    fontSize: type == 'secondary' ? 23 : 18,
  }),
});
