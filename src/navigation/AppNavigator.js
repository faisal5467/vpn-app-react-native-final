// src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from './MainNavigator';
import SignupScreen from '../screens/Authflow/SignupScreen'



const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="MainNavigator" component={MainNavigator} />
    <Drawer.Screen name="SettingsScreen" component={SignupScreen} />

  </Drawer.Navigator>
);

export default AppNavigator;
