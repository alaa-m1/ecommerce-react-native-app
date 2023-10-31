import React from 'react';
import Home from './src/screens/Home';
import {StatusBar, useColorScheme, SafeAreaView} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Auth from '~/screens/Auth';
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
        <Home />
      </SafeAreaView>
  );
};

export default App;
