import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Assets1, BG_GS} from '../../assets';
import {Button} from '../../component';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={BG_GS} style={styles.page}>
      <Assets1 style={styles.image} />
      <View style={styles.containerButton}>
        <View>
          <Text
            style={{
              color: '#70A0B2',
              fontSize: 44,
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 28,
            }}>
            DokterKu
          </Text>
          <Text style={styles.title}>
            Konsultasi dengan dokter jadi lebih mudan & fleksibel
          </Text>
        </View>
        <View>
          <Button
            title="Get Started"
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
          <View style={{height: 16}} />
          <Button
            title="Sign In"
            type="secondary"
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: width - 61,
    height: height - 472,
    marginTop: 63,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    width: 305,
  },
  containerButton: {
    alignItems: 'center',
    paddingBottom: 33,
    width: width - 61,
    height: height - 404,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
