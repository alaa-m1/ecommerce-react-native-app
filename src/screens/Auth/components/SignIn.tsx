import {
  GestureResponderEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {EButton, ETextField} from '~/shared';

type SignInProps = {
  style: StyleProp<ViewStyle>;
};
export const SignIn = (props: SignInProps) => {
  const handleOnSignIn = (event: GestureResponderEvent) => {
    console.log('SignIn');
  };

  return (
    <View {...props}>
      <ETextField label="Email:" placeholder="example@provider.com" />
      <ETextField label="Password:" placeholder="*********" isPassword />
      <EButton variant="contained" label="Sign In" onPress={handleOnSignIn} />
    </View>
  );
};

