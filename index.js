/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

export default function AppIndex() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={{flex: 1}} edges={['left', 'right']}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => AppIndex);
