import { useState } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {EButton, ETextField} from '~/shared';
import {Checkbox} from 'react-native-paper';

type SignUpProps = {
  style: StyleProp<ViewStyle>;
};
export const SignUp = (props: SignUpProps) => {
  const [checked, setChecked] = useState<
    'checked' | 'unchecked' | 'indeterminate'
  >('checked');

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
    </View>
  );
};
