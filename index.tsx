/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import {RecoilRoot} from 'recoil';

export default function Main() {
  return (
    <PaperProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
