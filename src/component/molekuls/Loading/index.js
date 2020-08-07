import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Spacing} from '../../atoms';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={50} color="#70A0B2" />
      <Spacing height={20} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#70A0B2',
  },
});
