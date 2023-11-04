import React from 'react';
import {Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

type ShoppingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type ShoppingScreenProps = {
  navigation: ShoppingScreenNavigationProp;
};

const ShoppingScreen = ({navigation}: ShoppingScreenProps): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>Shooping</Text>
    </SafeAreaView>
  );
};
export default ShoppingScreen;
