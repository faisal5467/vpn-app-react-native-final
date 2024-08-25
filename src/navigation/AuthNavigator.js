// src/navigation/AuthNavigator.js
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator     screenOptions={{
    headerShown: false,

   
  }}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    {/* Add other auth-related screens here */}
  </Stack.Navigator>
);

export default AuthNavigator;
