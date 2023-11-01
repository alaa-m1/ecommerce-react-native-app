import React from 'react';
import HomePage from './src/screens/Home/HomePage';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AuthPage from '~/screens/Auth/AuthPage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AuthPage />
      </SafeAreaView>
      </SafeAreaProvider>
  );
};

export default App;
