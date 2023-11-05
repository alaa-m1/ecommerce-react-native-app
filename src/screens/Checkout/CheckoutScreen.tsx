import React from 'react';
import {Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EHeader, headerIconSize} from '~/shared';

type CheckoutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Checkout'
>;

type CheckoutScreenProps = {
  navigation: CheckoutScreenNavigationProp;
};

const CheckoutScreen = ({navigation}: CheckoutScreenProps): JSX.Element => {
  return (
    <SafeAreaView>
      <EHeader
        title="Checkout"
        iconProps={{
          iconLocation: 'left',
          iconSource: 'chevron-left',
          size: headerIconSize,
          onIconPress: () => navigation.goBack(),
        }}
      />
      <Text>Checkout screen</Text>
    </SafeAreaView>
  );
};
export default CheckoutScreen;
