import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, CardDoctor} from '../../component';

const ListDoctor = ({navigation}) => {
  return (
    <View>
      <Header title="Doctor List" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.wrapperContent}>
        <CardDoctor name="Dr. Ong Seong Woo" job="Dokter Umum" />
      </ScrollView>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  wrapperContent: {
    marginHorizontal: 23,
  },
});
