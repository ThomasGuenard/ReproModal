/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import RootStack from './src/navigator/RootStack';
import {DrawerProvider} from './src/context/DrawerContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <DrawerProvider>
          <RootStack />
        </DrawerProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
