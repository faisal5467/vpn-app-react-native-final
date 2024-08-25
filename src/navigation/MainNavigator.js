import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack for Home tab including Product screens
const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,

   
  }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <Tab.Navigator screenOptions={{
    headerShown: false,

   
  }}>
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
