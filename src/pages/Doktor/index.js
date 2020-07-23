import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  Profil,
  Banner,
  Spacing,
  CardCategories,
  CardDoctor,
} from '../../component';

const Doktor = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Profil />
      <Spacing height={29} />
      <Banner />
      <Spacing height={22} />
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapperCategories}>
          <CardCategories
            title="Dokter Umum"
            onPress={() => navigation.navigate('ListDoctor')}
          />
          <Spacing width={18} />
          <CardCategories title="Dokter Anak" />
          <Spacing width={18} />
          <CardCategories title="Dokter Psikiater" />
          <Spacing width={18} />
          <CardCategories title="Dokter Obat" />
        </View>
      </ScrollView>
      <Spacing height={22} />
      <Text style={styles.title}>Top Doctors</Text>
      <CardDoctor
        name="Dr Ong Seong Woo"
        job="Dokter Umum"
        gender="man"
        onPress={() => navigation.navigate('DetailDoctor')}
      />
      <CardDoctor
        name="Dr. Yosina Quratul Aini"
        job="Dokter Anak"
        gender="woman"
        onPress={() => navigation.navigate('DetailDoctor')}
      />
      <CardDoctor name="Dr Reza Renaldi" job="Dokter Obat" gender="man" />
      <Spacing height={20} />
    </ScrollView>
  );
};

export default Doktor;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 23,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapperCategories: {
    flexDirection: 'row',
  },
});
