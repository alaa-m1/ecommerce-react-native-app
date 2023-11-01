/* eslint-disable prettier/prettier */
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {EButton} from '~/shared';

const HomePage = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handleOnSignIn = (event: GestureResponderEvent) => {
    console.log('SignIn');
  };
  const handleOnSignUp = (event: GestureResponderEvent) => {
    console.log('SignUp');
  };
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        ...styles.splashContainer,
      }}>
      <Image
        resizeMode="contain"
        style={styles.mainImage}
        source={require('../../assets/images/ecommerce-logo.png')}></Image>
      <Text style={styles.mainTitle}>E-commerce </Text>
      <Text style={styles.subTitle}>is a joy with us</Text>
      <EButton variant="contained" label="Sign In" onPress={handleOnSignIn} />
      <EButton label="Sign Up" onPress={handleOnSignUp} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainImage: {
    width: '90%',
  },
  splashContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  mainTitle: {fontSize: 40, fontWeight: 'bold'},
  subTitle: {fontSize: 25},
});
export default HomePage;
