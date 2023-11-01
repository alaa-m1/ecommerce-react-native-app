import {GestureResponderEvent, View} from 'react-native';
import {EButton, ETextField} from '~/shared';

export const SignIn = () => {
  const handleOnSignIn = (event: GestureResponderEvent) => {
    console.log('SignIn');
  };
  return (
    <View>
      <ETextField label="Email:" placeholder="example@provider.com" />
      <ETextField
        label="Password:"
        placeholder="*********"
        isPassword
      />
      <EButton variant="contained" label="Sign In" onPress={handleOnSignIn} />
    </View>
  );
};
