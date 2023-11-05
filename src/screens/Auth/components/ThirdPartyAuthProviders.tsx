import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {useGoogleSignin} from '../hooks';
import {EButton, ESeparate, useAlert} from '~/shared';
import {useEffect} from 'react';
import _ from 'lodash';

export const ThirdPartyAuthProviders = () => {
  const {googleSignIn, error, useInfo} = useGoogleSignin();

  const {showAlert} = useAlert({
    title: 'title 11',
    msg: useInfo?.user.name || '',
    onDismiss: () => console.log('onDismiss'),
    cancelable: true,
    Btns: [{}],
  });

  useEffect(() => {
    if (!_.isEmpty(useInfo?.user.name)) showAlert();
  }, [useInfo?.user.name]);
  return (
    <View>
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
