import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Spacing, CardMessage} from '../../component';

const Messages = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Spacing height={25} />
      <Text style={styles.messages}>Messages</Text>
      <CardMessage
        onPress={() => {
          navigation.navigate('Chatting');
        }}
      />
    </ScrollView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 22,
  },
  messages: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
