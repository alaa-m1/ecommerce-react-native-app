import {GestureResponderEvent, View} from 'react-native';
import {Header, SignIn} from './components';

const AuthPage = () => {
  const handleNavBackPress = (event: GestureResponderEvent) => {
    console.log('111111');
  };
  return (
    <View>
      <Header title="Sign In" onNavBackPress={handleNavBackPress} />
      <SignIn />
    </View>
  );
};

export default AuthPage;
