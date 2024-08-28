import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { ActivityIndicator, SafeAreaView } from 'react-native';

import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import { getUserDetail } from '../constant/userDetials';
import TermServices from '../screens/TermServices';
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

















const MainNavigator = () => {

const [isLoading, setIsLoading] = useState(true);
const [initialRoute, setInitialRoute] = useState('Onboarding');

useEffect(() => {
  const checkUserStatus = async () => {
    const userDetail = await getUserDetail();
    if (userDetail.status && userDetail.data) {
      setInitialRoute('Home');
    } else if (!userDetail.firstInstall) {
      setInitialRoute('Onboarding');
    } else {
      setInitialRoute('Home');
    }
    setIsLoading(false);
  };

  checkUserStatus();
}, []);

if (isLoading) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </SafeAreaView>
  );
}


return(


  <Stack.Navigator initialRouteName={initialRoute} screenOptions={{
    headerShown: false,

   
  }}>
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
    <Stack.Screen name="TermServices" component={TermServices} />
    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
  </Stack.Navigator>
  // <Tab.Navigator screenOptions={{
  //   headerShown: false,

   
  // }}>
  //   <Tab.Screen name="Home" component={HomeStackNavigator} />
  //   <Tab.Screen name="Profile" component={ProfileScreen} />
  //   <Tab.Screen name="Settings" component={SettingsScreen} />
  // </Tab.Navigator>
);
}

export default MainNavigator;
