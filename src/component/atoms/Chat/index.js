import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IsMe from './IsMe';
import Others from './Others';

const Chat = ({Isme, others}) => {
  return (
    <View>
      {Isme && <IsMe />}
      {others && <Others />}
    </View>
  );
};

export default Chat;
