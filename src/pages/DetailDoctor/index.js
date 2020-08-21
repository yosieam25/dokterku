import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Spacing, Button} from '../../component';
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
        <View
          style={{
            alignItems: 'flex-end',
            paddingRight: 23,
          }}>
          <Rating />
        </View>
        <View style={{marginBottom: 20, marginTop: 40}}>
          <Text style={{fontSize: 23, fontWeight: 'bold', marginBottom: 10}}>
            Tentang
          </Text>
          <Text style={{fontSize: 18, opacity: 0.5}}>
            Dr Reza Renaldi adalah dokter umum yang sudah memiliki pengalman 5
            tahun lebih di bidang kedokteran
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 23, fontWeight: 'bold', marginBottom: 10}}>
            Tempat Praktek
          </Text>
          <Text style={{fontSize: 18, opacity: 0.5}}>
            Rumah Sakit Umum, Bandung
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 23, fontWeight: 'bold', marginBottom: 10}}>
            Jam Kerja
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, opacity: 0.5, alignSelf: 'center'}}>
              Senin - Jum'at, 09.00 - 18.00
            </Text>
            <Text style={styles.statusKonsultasi}>Buka</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Button title="Konsultasi" />
        </View>
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
  statusKonsultasi: {
    backgroundColor: '#E3EEFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginLeft: 10,
    fontSize: 18,
  },
});
