import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {Header, SignIn, SignUp} from './components';
import { sharedStyles } from '~/shared';

const AuthPage = () => {
  const handleNavBackPress = (event: GestureResponderEvent) => {
    console.log('111111');
  };
  return (
    <View style={styles.container}>
      <Header title="Sign In" onNavBackPress={handleNavBackPress} />
      <SignIn style={styles.page} />
    </View>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  page: sharedStyles.page,
});
