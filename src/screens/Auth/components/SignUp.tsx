import {useEffect, useState} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {EButton, ESeparate, ETextField, useAlert} from '~/shared';
import {Checkbox} from 'react-native-paper';
import {useGoogleSignin} from '../hooks';
import _ from 'lodash';

type SignUpProps = {
  style: StyleProp<ViewStyle>;
};
export const SignUp = (props: SignUpProps) => {
  const [checked, setChecked] = useState<
    'checked' | 'unchecked' | 'indeterminate'
  >('checked');

  const {googleSignIn, error, useInfo} = useGoogleSignin();

  const {showAlert} = useAlert({
    title: 'title 11',
    msg: useInfo?.user.name || '',
    onDismiss: () => console.log('onDismiss'),
    cancelBtn: {},
  });
  useEffect(() => {
    if (!_.isEmpty(useInfo?.user.name)) showAlert();
  }, [useInfo?.user.name]);

  const handleOnSignUp = (event: GestureResponderEvent) => {
    console.log('SignUp');
  };
  
  return (
    <View {...props}>
      <ETextField label="Name:" placeholder="User name" />
      <ETextField label="Email:" placeholder="example@provider.com" />
      <ETextField label="Password:" placeholder="*********" isPassword />
      <Checkbox.Item
        label="Accept terms & conditions"
        status={checked}
        position="leading"
        labelVariant="headlineSmall"
        onPress={() => {
          if (checked === 'checked') {
            setChecked('unchecked');
          } else setChecked('checked');
        }}
      />
      <EButton variant="contained" label="Sign Up" onPress={handleOnSignUp} />
      <ESeparate label="Or continue with" />
      <EButton
        variant="outlined"
        // label="Google"
        onPress={(event: GestureResponderEvent) => googleSignIn()}
        viewStyle={styles.googleBtn}
        iconProps={{name: 'google', color: '#4285F4', size: 35}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  googleBtn: {
    width: '50%',
  },
});
