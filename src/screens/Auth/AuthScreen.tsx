import {
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {AuthHeader, SignIn, SignUp, ThirdPartyAuthProviders} from './components';
import {palette, sharedStyles} from '~/shared';
import {Text} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

type AuthScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Auth'
>;
type AuthScreenRouteProp = RouteProp<RootStackParamList, 'Auth'>;
type AuthPageProps = {
  navigation: AuthScreenNavigationProp;
  route: AuthScreenRouteProp;
};

const AuthScreen = ({route, navigation}: AuthPageProps) => {
  const handleNavBackPress = (event: GestureResponderEvent) => {
    navigation.goBack();
  };

  const {view} = route.params;
  return (
    // at the first of every screen
    <SafeAreaView>
      <AuthHeader
        title={view === 'sign-in' ? 'Sign In' : 'Sign Up'}
        onNavBackPress={handleNavBackPress}
      />
      <ScrollView style={styles.container}>
        {view === 'sign-in' ? (
          <SignIn style={{marginBottom: 5}} />
        ) : (
          <SignUp style={{marginBottom: 5}} />
        )}
        <ThirdPartyAuthProviders />
        {view === 'sign-in' ? (
          <View style={styles.footer}>
            <Text style={styles.linkLabel}>
              If you do not have an account &nbsp;
              <Text
                style={styles.link}
                onPress={() => navigation.navigate('Auth', {view: 'sign-up'})}>
                Sign Up
              </Text>
            </Text>
          </View>
        ) : (
          <View style={styles.footer}>
            <Text style={styles.linkLabel}>
              If you already have an account &nbsp;
              <Text
                style={styles.link}
                onPress={() => navigation.navigate('Auth', {view: 'sign-in'})}>
                Sign In
              </Text>
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    ...sharedStyles.page,
  },
  googleBtn: {
    width: '50%',
  },
  // page: sharedStyles.page,
  footer: {alignItems: 'center'},
  linkLabel: {
    fontSize: 20,
  },
  link: {
    fontSize: 22,
    color: palette.primary.main,
  },
});
