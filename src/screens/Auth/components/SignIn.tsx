import {GestureResponderEvent, StyleProp, View, ViewStyle} from 'react-native';
import {useRecoilState} from 'recoil';
import {EButton, ETextField, useAlert} from '~/shared';
import { userInfoState } from '~/states';

type SignInProps = {
  style: StyleProp<ViewStyle>;
};
export const SignIn = (props: SignInProps) => {
  const [, setUserInfo] = useRecoilState(userInfoState);

  const {showAlert} = useAlert({
    title: 'SignIn',
    msg: 'Fake sign in for testing',
    onDismiss: () => console.log('onDismiss'),
    cancelable: true,
    Btns: [
      {text: 'Cancel', onPress: () => console.log('close'), style: 'cancel'},
      {
        text: 'ok',
        onPress: () =>
          console.log(
            setUserInfo({userName: 'Alaa', email: 'alaa865a@gmail.com'}),
          ),
        style: 'default',
      },
    ],
  });

  const handleOnSignIn = (event: GestureResponderEvent) => {
    showAlert();
  };

  return (
    <View {...props}>
      <ETextField label="Email:" placeholder="example@provider.com" />
      <ETextField label="Password:" placeholder="*********" isPassword />
      <EButton variant="contained" label="Sign In" onPress={handleOnSignIn} />
    </View>
  );
};
