import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import {Icon} from 'react-native-paper';
import ShoppingScreen from '../Shopping/ShoppingScreen';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Shopping"
        component={ShoppingScreen}
        options={{
          tabBarLabel: 'Shopping',
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({color, size}) => <Icon source="shopping" size={30} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({color, size}) => <Icon source="home" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 15,
  },
});
