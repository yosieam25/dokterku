import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Spacing} from '../../component';
import {ProfilMan, Star} from '../../assets';

const DetailDoctor = () => {
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
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header type="detaildoctor" />
      <View style={styles.contentWrapper}>
        <View style={styles.contentHeader}>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              Dr. Reza Renaldi
            </Text>
            <Spacing height={5} />
            <Text style={{opacity: 0.5, fontSize: 18}}>Dokter Umum</Text>
          </View>
          <View>
            <Image source={ProfilMan} style={{width: 165, height: 200}} />
          </View>
        </View>
        <Rating />
      </View>
    </View>
  );
};

export default DetailDoctor;

const styles = StyleSheet.create({
  contentWrapper: {
    position: 'absolute',
    width: '100%',
    top: 80,
    paddingHorizontal: 30,
  },
  contentHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperStar: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  star: {
    width: 24,
    height: 24,
  },
});
