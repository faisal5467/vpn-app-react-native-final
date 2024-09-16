
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  Animated, Easing 
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import CountryFlag from 'react-native-country-flag';
import CustomModal from '../components/CustomModal'
import Button from '../components/Button';
import Images from '../constants/Image';

import {
  NativeModules,
  NativeEventEmitter,
  DeviceEventEmitter,
} from "react-native";

import Papa from "papaparse";
import { useIsFocused } from "@react-navigation/native";
const { VpnServiceModule, MainActivity } = NativeModules;
import { Buffer } from "buffer"; // Make sure to install buffer with `npm install buffer`

const decodeBase64 = (base64String) => {
  const buffer = Buffer.from(base64String, "base64");
  return buffer.toString("utf-8");
};

const HomeScreen = ({route}) => {
  // const locationselect =  route.params
  const [isConnected, setIsConnected] = useState(false);
  const navigation = useNavigation();
  // const toggleConnection = () => {
  //   setIsConnected(!isConnected);
  // };

  const [modalVisible, setModalVisible] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  const [location, setLocation] = useState(null);


    const [vpnState, setVpnState] = useState("disconnected");
  const [vpnList, setVpnList] = useState([]);
  const [selectedVpn, setSelectedVpn] = useState(null);
  const [vpnStatus, setVpnStatus] = useState("");
  useEffect(() => {
    // Initialize VPNs
    initVpn();
    const vpnStateListener = DeviceEventEmitter.addListener(
      "VpnStage",
      (stage) => {
        setVpnState(stage.stage.toLowerCase());
      }
    );
    const vpnStatusSubscription = DeviceEventEmitter.addListener(
      "VpnStatus",
      (event) => {
        setVpnStatus(`${event.byte_in || ""}, ${event.byte_out || ""}`);
      }
    );

    return () => {
      vpnStateListener.remove();
      vpnStatusSubscription.remove();
    };
  }, []);

  const initVpn = async () => {
    const vpnList = [
      {
        country: "Japan",
        username: "vpn",
        password: "vpn",
        // config: await fetchConfigFile('japan.ovpn'),
      },
      // {
      //   country: 'Thailand',
      //   username: 'vpn',
      //   password: 'vpn',
      //   config: await fetchConfigFile(),
      // },
    ];
    setVpnList(vpnList);
    // setSelectedVpn(vpnList[0]);
  };




  const startVpn = async () => {
    if (selectedVpn == null) return;
    // const config = decodeBase64(selectedVpn.OpenVPN_ConfigData_Base64);
    console.log("-----------", selectedVpn);
    // if (selectedVpn) {
    if (vpnState === "disconnected") {
      VpnServiceModule.startVpn(
        selectedVpn.config,
        // selectedVpn.country,
        'japan',
        "vpn",
        "vpn",
        null,
        null

      );
    } else {
      VpnServiceModule.stopVpn();
      setVpnState("disconnected");
      setVpnStatus("Disconnected from VPN");
    }
  };









  const handleConnectionToggle = () => {
      if (isConnected) {
          // Show the modal to confirm disconnection
          setModalVisible(true);
      } else {
          // If not connected, directly connect with animation
          startConnectionAnimation();
      }
  };

  const startConnectionAnimation = () => {
      Animated.timing(progress, {
          toValue: 1,
          duration: 5000, // Animation duration
          easing: Easing.linear,
          useNativeDriver: false,
      }).start(() => {
          setIsConnected(true); // Set connected state after animation
      });
  };

  const handleDisconnect = () => {
      setIsConnected(false);
      progress.setValue(0); // Reset animation if disconnected
      setModalVisible(false);
  };

  const closeModal = () => {
      setModalVisible(false);
  };

  const animatedStyle = {
      borderColor: progress.interpolate({
          inputRange: [0, 1],
          outputRange: ['rgba(255, 255, 255, 0.3)', 'orange'],
      }),
      transform: [{
          rotate: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
          }),
      }],
  };

  // const [location, setLocation] = useState({
  //   country: 'United Kingdom',
  //   city: 'London',
  //   flag: 'GB',
  //   signalStrength: 4,
  // });

  // console.log(locationselect)
  React.useEffect(() => {
    if (route.params?.selectedVpn) {
      setLocation(route.params.selectedVpn);
      setSelectedVpn(route.params.selectedVpn)
      // console.log('route ka data ------', route.params.selectedVpn )
    } else {
      setLocation({
           country: 'United Kingdom',
    city: 'London',
    flag: 'GB',
    signalStrength: 4,
      })
    }
  }, [route.params?.selectedVpn]);
  return (
    <View style={styles.container}>
    

      <ImageBackground source={Images.Maps} style={styles.drawerBackground}>
        {/* <View style={styles.header}> */}

        <CustomHeader
          leftComponent={
            <TouchableOpacity
              // onPress={() => navigation.openDrawer()}
              onPress={() => navigation.toggleDrawer()} 
              style={{backgroundColor: 'gray', borderRadius: 30, padding: 8}}>
              <Image source={Images.DrawerMenu} />
              {/* <Image source={require('../assets/images/MenuButton.png')} /> */}
            </TouchableOpacity>
          }
          middleComponent={
            <Image source={Images.Applogo} style={styles.logo} />
          }
          rightComponent={<Image source={Images.tajIcon} />}
        />

     <TouchableOpacity style={styles.button} onPress={startVpn}>
       <Text style={styles.buttonText}>
           {vpnState === "disconnected" ? "Connect VPN" : vpnState.toUpperCase()}
        </Text>
    </TouchableOpacity>

 {/* Conditionally render content based on whether location is selected */}
 {location ? (
          <View style={styles.locationContainer}>
            {/* <CountryFlag isoCode={location.flag} size={32} /> */}
            <View style={styles.locationDetails}>
              <Text style={styles.locationText}>{location.country}</Text>
              <Text style={styles.cityText}>{location.city}</Text>
            </View>
            <Image source={Images.InternetWaves} />
          </View>
        ) : (
          <View style={styles.selectLocationPrompt}>
            <Text style={styles.selectLocationText}>
              Please select a location
            </Text>
            {/* <TouchableOpacity
              style={styles.changeLocationButton}
              onPress={() => navigation.navigate('LocationSelectionScreen')}>
              <Image source={Images.ChangeLocation} />
            </TouchableOpacity> */}
          </View>
        )}
        {/* <View style={styles.locationContainer}>
          <CountryFlag isoCode={location.flag} size={32} />

          <View style={styles.locationDetails}>
            <Text style={styles.locationText}>{location.country}</Text>
            <Text style={styles.cityText}>{location.city}</Text>
          </View>
         
          <Image source={Images.InternetWaves} />
        </View> */}


        <TouchableOpacity
          style={styles.changeLocationButton}
          onPress={() => navigation.navigate('LocationSelectionScreen')}>
       
          <Image source={Images.ChangeLocation} />
        </TouchableOpacity>
  
        <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{vpnStatus}</Text>
          {/* <Text style={styles.timerText}>01 : 25 : 40</Text>
          <Text style={styles.ipText}>Your IP : 51.77.108.159</Text> */}
        </View>
        {/* <Button
        title="My Account"
        onPress={()=>navigation.navigate('MyAccount')}
      />
        <Button
        title="SettingsScreen"
        onPress={()=>navigation.navigate('SettingsScreen')}
      />
        <Button
        title="Help"
        onPress={()=>navigation.navigate('Help')}
      /> */}
   
        <View style={styles.animationWrapper}>
                <Animated.View style={[styles.progressCircle, animatedStyle]} />
                <TouchableOpacity
                    style={
                        isConnected
                            ? styles.disconnectButtonMain
                            : styles.connectButtonMain
                    }
              


                  onPress={() => {
                      if (vpnState === "disconnected") {
                        startVpn(); // Function to connect VPN
                        handleConnectionToggle();
                      } else {
                        startVpn();  // Function to disconnect VPN
                        handleConnectionToggle();
                      }
                    }}
                  >
                    <Image
                      source={vpnState === "disconnected" ? Images.Connect : Images.x}
                    />


                </TouchableOpacity>
            </View>

            <CustomModal
                visible={modalVisible}
                onClose={closeModal}
                title="Do you want to disconnect?"
                onConfirm={handleDisconnect}
                onCancel={closeModal}
                icon="close-o"
            />
        <View
          style={{
            height: 160,
            backgroundColor: 'orange',
            bottom: 0,
            position: 'absolute',
            right: 0,
            left: 0,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
          }}>
          {isConnected ? (
            <View style={styles.speedContainer}>
              <View style={styles.speedBox}>
              <Image source={Images.arrowDown} />
      
                <Text style={styles.speedText}>62.5 MB/s</Text>
              </View>
              <View style={styles.speedBox}>
              <Image source={Images.arrowUP} />
                <Text style={styles.speedText}>41.2 MB/s</Text>
              </View>
            </View>
          ) : (
            <View style={styles.speedContainer}>
              <Text style={styles.tapToConnectText}>Tap to Connect</Text>
            </View>
          )}
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c161b',
  },
  drawerBackground: {
    flex: 1,
    resizeMode: 'cover',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: 10,
    padding: 10,
  },
  locationDetails: {
    flex: 1,
    marginLeft: 10,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
  },
  cityText: {
    color: 'white',
    fontSize: 14,
  },
  changeLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ffaf1a',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  changeLocationText: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  timerText: {
    color: 'orange',
    fontSize: 36,
    fontWeight: 'bold',
  },
  ipText: {
    color: 'orange',
    fontSize: 14,
    marginTop: 10,
  },
  connectButton: {
    backgroundColor: '#ffaf1a',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  disconnectButton: {
    backgroundColor: '#ff4d4d',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  speedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20%',
  },
  speedBox: {
    backgroundColor: '#ffaf1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  speedText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },

  connectButtonMain: {
    backgroundColor: 'white',
    width: 130,
    height: 130,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginBottom: 20,
  },
  disconnectButtonMain: {
    backgroundColor: 'white',
    width: 130,
    height: 130,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginBottom: 20,
  },

  tapToConnectContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  tapToConnectText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '600',
  },
  Blueabsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    color: '#999',
    fontSize: 16,
  },
  disconnectButton: {
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: 'bold',
  },



animationWrapper: {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginTop:60
},
powerButton: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 100,
},
progressCircle: {
  position: 'absolute',
  width: 152,
  height: 152,
  borderRadius: 75,
  borderWidth: 8,
  borderColor: 'rgba(255, 255, 255, 0.3)', // Initial white transparent circle
},










selectLocationPrompt: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
},
selectLocationText: {
  color: 'orange',
  fontSize: 20,
  fontWeight: 'bold',
},



});

export default HomeScreen;
