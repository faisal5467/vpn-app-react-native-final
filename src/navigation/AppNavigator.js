// // src/navigation/AppNavigator.js
// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import MainNavigator from './MainNavigator';
// import SettingsScreen from '../screens/SettingsScreen';
// import AboutScreen from '../screens/AboutScreen';


// const Drawer = createDrawerNavigator();

// const AppNavigator = () => (
//   <Drawer.Navigator>
//     <Drawer.Screen name="MainNavigator" component={MainNavigator} />
//     <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
//     <Drawer.Screen name="AboutScreen" component={AboutScreen} />

  
//     {/* Add more drawer items here */}
//   </Drawer.Navigator>
// );

// export default AppNavigator;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, useDrawerProgress } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import MyAccount from '../screens/MyAccount';
import SettingsScreen from '../screens/SettingsScreen';
import Help from '../screens/Help';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Images from '../constant/Images';
import TermServices from '../screens/TermServices';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import HelpDetailScreen from '../screens/HelpDetailScreen';
import LocationSelectionScreen from '../screens/LocationSelectionScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const progress = useDrawerProgress();

    const animatedStyle = useAnimatedStyle(() => {
        const translateX = interpolate(progress.value, [0, 1], [-100, 0]);
        return {
            transform: [{ translateX }],
        };
    });

    return (
        <Animated.View style={[animatedStyle, { flex: 1 }]}>
            <View style={styles.drawerBackground}>
                <DrawerContentScrollView {...props}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
                        <Icon name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.profileContainer}>
                        <Text style={styles.greeting}>Hello,</Text>
                        <Text style={styles.userName}>Thomas K. Wilson</Text>
                    </View>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
                <TouchableOpacity style={styles.premiumButton} onPress={() => alert('Go to Premium')}>
                    <Icon name="star" size={20} color="orange" />
                    <Text style={styles.premiumText}>Go to Premium</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const AppNavigator = () => {
    return (
  
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                  headerShown:false,
                  drawerStyle: {
                      width: '75%',
                  },
                  drawerLabelStyle: {
                      color: 'white', // Set drawer label color to white
                  },
                  drawerActiveTintColor: 'white', // Set active item tint color to white
                  drawerInactiveTintColor: 'white', // Set inactive item tint color to white
              }}

            >
                <Drawer.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        drawerLabel: 'Home',
                        drawerIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="MyAccount"
                    component={MyAccount}
                    options={{
                        drawerLabel: 'My Account',
                        drawerIcon: ({ color }) => <Icon name="person" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="SettingsScreen"
                    component={SettingsScreen}
                    options={{
                        drawerLabel: 'Setting',
                        drawerIcon: ({ color }) => <Icon name="settings" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="TermServices"
                    component={TermServices}
                    options={{
                        drawerLabel: 'Term Services',
                        drawerIcon: ({ color }) => <Icon name="settings" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="PrivacyPolicy"
                    component={PrivacyPolicy}
                    options={{
                        drawerLabel: 'Privacy Policy',
                        drawerIcon: ({ color }) => <Icon name="settings" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="ChangePasswordScreen"
                    component={ChangePasswordScreen}
                    options={{
                        drawerLabel: 'ChangePassword',
                        drawerIcon: ({ color }) => <Icon name="settings" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="HelpDetailScreen"
                    component={HelpDetailScreen}
                    options={{
                        drawerLabel: 'HelpDetailScreen',
                        drawerIcon: ({ color }) => <Icon name="settings" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="LocationSelectionScreen"
                    component={LocationSelectionScreen}
                    options={{
                        drawerLabel: 'LocationSelectionScreen',
                        drawerIcon: ({ color }) => <Icon name="settings" size={24} color={color} />,
                    }}
                />
            
                <Drawer.Screen
                    name="Help"
                    component={Help}
                    options={{
                        drawerLabel: 'Help',
                        drawerIcon: ({ color }) => <Icon name="help-outline" size={24} color={color} />,
                    }}
                />
            </Drawer.Navigator>
   
    );
};

const styles = StyleSheet.create({
    drawerBackground: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor:'orange'
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    profileContainer: {
        marginVertical: 20,
    },
    greeting: {
        color: 'white',
        fontSize: 16,
    },
    userName: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    premiumButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginHorizontal: 20,
        marginBottom: 30,
    },
    premiumText: {
        color: 'orange',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AppNavigator;
