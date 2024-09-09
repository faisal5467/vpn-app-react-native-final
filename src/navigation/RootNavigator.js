// // src/navigation/RootNavigator.js
// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './AppNavigator';

// const RootNavigator = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, user => {
// //       setIsAuthenticated(!!user);
// //     });

// //     return () => unsubscribe();
// //   }, []);

//   return (
//     <NavigationContainer>
//       {isAuthenticated ? <AppNavigator /> : <AppNavigator />}
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;
/////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import { getUserDetail } from '../constant/userDetials';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import SignupScreen from '../screens/AuthScreen/SignupScreen';
import ForgotPasswordScreen from '../screens/AuthScreen/ForgotPasswordScreen';
// import OTPVerificationScreen from '../screens/AuthScreen/OTPVerificationScreen';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('OnboardingScreen');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUserStatus = async () => {
      const userDetail = await getUserDetail();
      if (userDetail.status && userDetail.data) {
        setIsAuthenticated(true);
        setInitialRoute('AppNavigator');
      } else if (!userDetail.firstInstall) {
        await addFirstInstallStatus(); // Mark onboarding as completed
        setInitialRoute('OnboardingScreen');
      } else {
        setInitialRoute('AuthNavigator');
      }
      setIsLoading(false);
    };

    checkUserStatus();
  }, []);

 

  return (
    <NavigationContainer>
       {isAuthenticated ? <AppNavigator /> : <AppNavigator />}
      {/* {initialRoute === 'OnboardingScreen' ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
          <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        </Stack.Navigator>
      ) : isAuthenticated ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )} */}
    </NavigationContainer>
  );
};

export default RootNavigator;
