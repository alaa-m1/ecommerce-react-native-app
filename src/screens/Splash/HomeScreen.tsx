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
import {EButton, sharedStyles} from '~/shared';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type SplashScreenProps = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen = ({navigation}: SplashScreenProps): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handleOnSignIn = (event: GestureResponderEvent) => {
    navigation.navigate('Auth', {view: 'sign-in'});
  };
  const handleOnSignUp = (event: GestureResponderEvent) => {
    navigation.navigate('Auth', {view: 'sign-up'});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.mainImage}
        source={require('../../assets/images/ecommerce-logo.png')}/>
      <Text style={styles.mainTitle}>Phoenix E-commerce </Text>
      <Text style={styles.subTitle}>Shopping is a joy with us</Text>
      <EButton variant="contained" label="Sign In" onPress={handleOnSignIn} />
      <EButton label="Sign Up" onPress={handleOnSignUp} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    ...sharedStyles.page,
    alignItems: 'center',
  },
  mainImage: {
    width: '90%',
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {fontSize: 25, marginBottom: 20},
});
export default SplashScreen;
