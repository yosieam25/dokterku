import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ProfilMan, Star, ProfilWoman} from '../../../assets';
import {Spacing} from '../../atoms';

const width = Dimensions.get('window').width;
const CardDoctor = ({name, gender, job, onPress}) => {
  const Rating = () => {
    const data = Array.from({length: 5});
    return (
      <View style={styles.wrapperStar}>
        {data.map((_, i) => (
          <Image key={i} source={Star} style={styles.star} />
        ))}
      </View>
    );
  };
  const Picture = () => {
    if (gender === 'man') {
      return <Image source={ProfilMan} style={styles.image} />;
    }
    if (gender === 'woman') {
      return <Image source={ProfilWoman} style={styles.image} />;
    }
    return <Image source={ProfilMan} style={styles.image} />;
  };
  return (
    <View style={styles.wrapper}>
      <Picture />
      <View style={styles.wrapperText}>
        <Text style={styles.name}>{name}</Text>
        <Spacing height={5} />
        <Text style={styles.job}>{job}</Text>
        <View style={styles.wrapperBottom}>
          <Rating />
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>Lihat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardDoctor;

const styles = StyleSheet.create({
  wrapper: {
    width: width - 44,
    height: 116,
    backgroundColor: '#BFD8FF',
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 23,
    marginTop: 21,
  },
  image: {
    width: 76,
    height: 87,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  job: {
    fontSize: 14,
    opacity: 0.5,
  },
  wrapperText: {
    marginLeft: 26,
  },
  wrapperStar: {
    flexDirection: 'row',
    maxWidth: 104,
    paddingTop: 10,
  },
  star: {
    width: 24,
    height: 24,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    color: '#70A0B2',
    backgroundColor: 'white',
    fontSize: 17,
    borderRadius: 20,
    textAlign: 'center',
    marginLeft: 30,
  },
  wrapperBottom: {
    flexDirection: 'row',
  },
});
