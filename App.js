// App.js
import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
const App = () => {
  return <RootNavigator />;
};

export default App;
