// App.js
import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Drawer = createDrawerNavigator();
const App = () => {
  return <RootNavigator />;
//   return(
// <NavigationContainer>
//    <Drawer.Navigator>
//       <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
//     </Drawer.Navigator>
// </NavigationContainer>
//   );
};

export default App;
