import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Profil, Banner, Spacing, CardCategories} from '../../component';

const Doktor = () => {
  return (
    <View style={styles.wrapper}>
      <Profil />
      <Spacing height={29} />
      <Banner />
      <Spacing height={22} />
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapperCategories}>
          <CardCategories title="Dokter Umum" />
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
    </View>
  );
};

export default Doktor;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 23,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapperCategories: {
    flexDirection: 'row',
  },
});
