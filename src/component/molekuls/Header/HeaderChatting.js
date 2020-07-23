import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BackIconWhite, ProfilMan} from '../../../assets';
import {Spacing} from '../../atoms';

const width = Dimensions.get('window').width;
const HeaderChatting = ({onPress}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={onPress}>
          <Image source={BackIconWhite} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.wrapperProfil}>
          <Image source={ProfilMan} style={styles.profil} />
          <Text style={styles.name}>Yosie Abdul Muzanil</Text>
          <Text style={styles.job}>Frontend Developer</Text>
          <Spacing height={20} />
        </View>
        <Spacing width={70} />
      </View>
      <View style={styles.spacing} />
    </View>
  );
};

export default HeaderChatting;

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 32,
    height: 32,
    marginTop: 29,
    marginLeft: 27,
  },
  wrapperProfil: {
    flex: 1,
    marginBottom: 13,
    alignItems: 'center',
    paddingTop: 20,
  },
  profil: {
    width: 71,
    height: 81,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  job: {
    fontSize: 14,
    color: 'white',
    opacity: 0.5,
    marginTop: 15,
  },
  spacing: {
    backgroundColor: 'white',
    width: width,
    height: 60,
    borderRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
