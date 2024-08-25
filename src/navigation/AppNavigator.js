// src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from './MainNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';


const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="MainNavigator" component={MainNavigator} />
    <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    <Drawer.Screen name="AboutScreen" component={AboutScreen} />

  
    {/* Add more drawer items here */}
  </Drawer.Navigator>
);

export default AppNavigator;
