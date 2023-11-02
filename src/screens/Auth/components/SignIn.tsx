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

type SignInProps = {
  style: StyleProp<ViewStyle>;
};
export const SignIn = (props: SignInProps) => {
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

  const handleOnSignIn = (event: GestureResponderEvent) => {
    console.log('SignIn');
  };

  return (
    <View {...props}>
      <ETextField label="Email:" placeholder="example@provider.com" />
      <ETextField label="Password:" placeholder="*********" isPassword />
      <EButton variant="contained" label="Sign In" onPress={handleOnSignIn} />
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
