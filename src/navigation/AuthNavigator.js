// src/navigation/AuthNavigator.js
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import SignupScreen from '../screens/AuthScreen/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator     screenOptions={{
    headerShown: false,

   
  }}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="LoginScreen" component={SignupScreen} />
    {/* Add other auth-related screens here */}
  </Stack.Navigator>
);

export default AuthNavigator;
