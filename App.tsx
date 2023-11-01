import React from 'react';
import HomePage from './src/screens/Home/HomePage';
import {StatusBar, useColorScheme, SafeAreaView} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import AuthPage from '~/screens/Auth/AuthPage';
const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AuthPage />
      </SafeAreaView>
  );
};

export default App;
