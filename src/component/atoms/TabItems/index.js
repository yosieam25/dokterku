import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  DoctorActive,
  DoctorInactive,
  HospitalActive,
  HospitalInactive,
  MessageActive,
  MessageInactive,
} from '../../../assets';

const TabItems = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Doktor') {
      return active ? (
        <Image style={styles.image} source={DoctorActive} />
      ) : (
        <Image style={styles.image} source={DoctorInactive} />
      );
    }
    if (title === 'Messages') {
      return active ? (
        <Image style={styles.image} source={MessageActive} />
      ) : (
        <Image style={styles.image} source={MessageInactive} />
      );
    }
    if (title === 'Hospitals') {
      return active ? (
        <Image style={styles.image} source={HospitalActive} />
      ) : (
        <Image style={styles.image} source={HospitalInactive} />
      );
    }
    return <Image style={styles.image} source={DoctorActive} />;
  };
  return (
    <TouchableOpacity style={styles.body} onPress={onPress}>
      <Icon />
      <Text style={styles.title(active)}> {title} </Text>
    </TouchableOpacity>
  );
};

export default TabItems;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 30,
    height: 30,
  },
  title: active => ({
    color: active ? '#112340' : '#495A75',
  }),
});
