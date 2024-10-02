
// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import CountryFlag from "react-native-country-flag";
 
// const locations = [
//     { id: 1, country: 'United Kingdom', city: 'London', flag: 'GB', signalStrength: 4 },
//     { id: 2, country: 'Canada', city: 'Victoria', flag: 'CA', signalStrength: 3 },
//     { id: 3, country: 'Canada', city: 'Ottawa', flag: 'CA', signalStrength: 4 },
//     { id: 4, country: 'Germany', city: 'Berlin', flag: 'DE', signalStrength: 4 },
//     { id: 5, country: 'Thailand', city: 'Bangkok', flag: 'TH', signalStrength: 3 },
//     { id: 6, country: 'Iceland', city: 'Reykjavik', flag: 'IS', signalStrength: 4 },
//     { id: 7, country: 'Vietnam', city: 'Ho Chi Minh', flag: 'VN', signalStrength: 3 },
//     { id: 8, country: 'Vietnam', city: 'Ha Noi', flag: 'VN', signalStrength: 3 },
//     // Add more locations as needed
// ];
// const LocationSelectionScreen = ({ navigation, route }) => {
//     const [search, setSearch] = useState('');
//     const [filteredLocations, setFilteredLocations] = useState(locations);
//     const [selectedLocation, setSelectedLocation] = useState(null);

//     const handleSearch = (text) => {
//         setSearch(text);
//         const filtered = locations.filter((location) => {
//             const country = location.country ? location.country.toLowerCase() : '';
//             const city = location.city ? location.city.toLowerCase() : '';
//             return country.includes(text.toLowerCase()) || city.includes(text.toLowerCase());
//         });
//         setFilteredLocations(filtered);
//     };

//     const handleLocationSelect = (location) => {
//         console.log('whats i', location)
//         setSelectedLocation(location);
//         navigation.navigate('HomeScreen', { selectedLocation: location });
//     };

//     const renderLocationItem = ({ item }) => (
//         <TouchableOpacity
//             style={[
//                 styles.locationItem,
//                 selectedLocation?.id === item.id && styles.selectedLocationItem,
//             ]}
//             onPress={() => handleLocationSelect(item)}
//         >
//             <View style={styles.locationInfo}>
//                 <CountryFlag isoCode={item.flag} size={32} />
//                 <View style={styles.locationDetails}>
//                     <Text style={styles.locationText}>{item.country}</Text>
//                     <Text style={styles.cityText}>{item.city}</Text>
//                 </View>
//             </View>
//             <Icon name="signal-cellular-alt" size={24} color="green" />
//         </TouchableOpacity>
//     );

    
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Change Location</Text>
//             <View style={styles.searchContainer}>
//                 <Icon name="search" size={24} color="white" style={styles.searchIcon} />
//                 <TextInput
//                     style={styles.searchInput}
//                     placeholder="Search"
//                     placeholderTextColor="#888"
//                     value={search}
//                     onChangeText={handleSearch}
//                 />
//             </View>
//             <FlatList
//                 data={filteredLocations}
//                 renderItem={renderLocationItem}
//                 keyExtractor={(item) => item.id.toString()}
//                 contentContainerStyle={styles.listContainer}
//                 keyboardShouldPersistTaps='always'
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1c161b',
//         paddingHorizontal: 20,
//         paddingVertical: 20,
//     },
//     title: {
//         fontSize: 20,
//         color: 'orange',
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#333',
//         borderRadius: 10,
//         paddingHorizontal: 10,
//         marginBottom: 20,
//     },
//     searchIcon: {
//         marginRight: 10,
//     },
//     searchInput: {
//         flex: 1,
//         color: 'white',
//     },
//     listContainer: {
//         paddingBottom: 20,
//     },
//     locationItem: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingVertical: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#333',
//         paddingHorizontal: 10,
//     },
//     selectedLocationItem: {
//         backgroundColor: 'orange',
//     },
//     locationInfo: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     locationDetails: {
//         marginLeft: 10,
//     },
//     locationText: {
//         color: 'white',
//         fontSize: 16,
//     },
//     cityText: {
//         color: '#ccc',
//         fontSize: 14,
//     },
// });

// export default LocationSelectionScreen;


// //////////////////////////////////////////////////////

// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import CountryFlag from "react-native-country-flag";
// //  import Papa from "papaparse";
// // import { useIsFocused } from '@react-navigation/native';



// // const vpnData = [
// //     // Your VPN data array here
// // ];

// // const LocationSelectionScreen = () => {
// //     const [searchQuery, setSearchQuery] = useState('');
// //     const [filteredData, setFilteredData] = useState(vpnServers);

// //     const isfocused = useIsFocused();


// //   const [vpnServers, setVpnServers] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const getVPNServers = async () => {
   
// //     try {
// //       const response = await fetch("http://www.vpngate.net/api/iphone/");
// //       if (!response.ok) throw new Error("Network response was not ok");
// //       const data = await response.text();

// //       const parts = data.split("#");
// //       if (parts.length < 2) {
// //         throw new Error("Unexpected data format");
// //       }

// //       const csvString = parts[1].split("*").join("");

// //       Papa.parse(csvString, {
// //         header: false,
// //         skipEmptyLines: true,
// //         complete: (results) => {
// //           const csvList = results.data;
// //           const header = csvList[0];
// //           const servers = csvList.slice(1).map((row) => {
// //             const tempJson = {};
// //             for (let j = 0; j < header.length; j++) {
// //               tempJson[header[j]] = row[j];
// //             }
// //             return tempJson;
// //           });
// //           setVpnServers(servers);
// //           console.log('server--',servers)
// //           setLoading(false); // Hide loading spinner after fetching
// //         },
// //       });
// //     } catch (error) {
// //       console.error("Error fetching or processing data:", error);
// //       setLoading(false); // Hide loading spinner on error
// //     }
// //   };
// //   useEffect(() => {
// //     getVPNServers();
// //   }, [isfocused]);
// //   const reloadServers = () => {
// //     getVPNServers();
// //   };

// //   console.log('servers---', vpnServers)









// //     const handleSearch = (query) => {
// //         setSearchQuery(query);
// //         if (query.trim() === '') {
// //             setFilteredData(vpnServers);
// //         } else {
// //             const filtered = vpnServers.filter(item =>
// //                 item.CountryLong.toLowerCase().includes(query.toLowerCase()) ||
// //                 item.HostName.toLowerCase().includes(query.toLowerCase()) ||
// //                 item.IP.toLowerCase().includes(query.toLowerCase())
// //             );
// //             setFilteredData(filtered);
// //         }
// //     };



// //         const handleLocationSelect = (location) => {
// //         console.log('whats i', location)
// //         setSelectedLocation(location);
// //         navigation.navigate('HomeScreen', { selectedLocation: location });
// //     };

// //     const renderItem = ({ item }) => (
// //         <TouchableOpacity
// //             style={[
// //                 styles.locationItem,
// //                 selectedLocation?.id === item.id && styles.selectedLocationItem,
// //             ]}
// //             onPress={() => handleLocationSelect(item)}
// //         >
// //             <View style={styles.locationInfo}>
// //                 {/* <CountryFlag isoCode={item.flag} size={32} /> */}
// //                 <View style={styles.locationDetails}>
// //                     <Text style={styles.locationText}>{item.CountryLong}</Text>
// //                     <Text style={styles.cityText}>{item.HostName}</Text>
// //                 </View>
// //             </View> 
// //             <Icon name="signal-cellular-alt" size={24} color="green" />
// //         </TouchableOpacity>
// //     );

// //     // const renderItem = ({ item }) => (
// //     //     <View style={styles.itemContainer}>
// //     //         <Text style={styles.itemText}>Country: {item.CountryLong}</Text>
// //     //         <Text style={styles.itemText}>Host: {item.HostName}</Text>
// //     //         <Text style={styles.itemText}>IP: {item.IP}</Text>
// //     //     </View>
// //     // );

// //     return (
// //         <View style={styles.container}>
// //             <View style={styles.searchContainer}>
// //                 <Icon name="search" size={24} color="white" style={styles.searchIcon} />
// //                 <TextInput
// //                     style={styles.searchInput}
// //                     placeholder="Search by Country, Hostname, or IP"
// //                     placeholderTextColor="#888"
// //                     value={searchQuery}
// //                     onChangeText={handleSearch}
// //                 />
// //             </View>

// //             <FlatList
// //                 data={vpnServers}
// //                 renderItem={renderItem}
// //                 keyExtractor={item => item.IP}
// //                 contentContainerStyle={styles.listContainer}
// //             />
// //         </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: '#1c161b',
// //         paddingHorizontal: 10,
// //         paddingVertical: 10,
// //     },
// //     searchContainer: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         backgroundColor: '#333',
// //         marginHorizontal: 10,
// //         marginVertical: 10,
// //         borderRadius: 10,
// //         paddingHorizontal: 10,
// //     },
// //     searchIcon: {
// //         marginRight: 10,
// //     },
// //     searchInput: {
// //         flex: 1,
// //         color: 'white',
// //     },
// //     listContainer: {
// //         paddingHorizontal: 10,
// //         paddingVertical: 10,
// //     },
// //     itemContainer: {
// //         paddingVertical: 15,
// //         borderBottomWidth: 1,
// //         borderBottomColor: '#333',
// //     },
// //     itemText: {
// //         color: 'white',
// //         fontSize: 16,
// //     },










// //     title: {
// //         fontSize: 20,
// //         color: 'orange',
// //         fontWeight: 'bold',
// //         marginBottom: 20,
// //     },
// //     searchContainer: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         backgroundColor: '#333',
// //         borderRadius: 10,
// //         paddingHorizontal: 10,
// //         marginBottom: 20,
// //     },
// //     searchIcon: {
// //         marginRight: 10,
// //     },
// //     searchInput: {
// //         flex: 1,
// //         color: 'white',
// //     },
// //     listContainer: {
// //         paddingBottom: 20,
// //     },
// //     locationItem: {
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         paddingVertical: 15,
// //         borderBottomWidth: 1,
// //         borderBottomColor: '#333',
// //         paddingHorizontal: 10,
// //     },
// //     selectedLocationItem: {
// //         backgroundColor: 'orange',
// //     },
// //     locationInfo: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //     },
// //     locationDetails: {
// //         marginLeft: 10,
// //     },
// //     locationText: {
// //         color: 'white',
// //         fontSize: 16,
// //     },
// //     cityText: {
// //         color: '#ccc',
// //         fontSize: 14,
// //     },
// // });

// // export default LocationSelectionScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator , Image} from 'react-native';

import CountryFlag from 'react-native-country-flag';
import Papa from 'papaparse';
import Images from '../constants/Image';

import Ionicons from 'react-native-vector-icons/Ionicons';
const LocationSelectionScreen = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [vpnServers, setVpnServers] = useState([]);
    const [filteredVpnServers, setFilteredVpnServers] = useState([]);
    const [selectedVpn, setSelectedVpn] = useState(null);
    const [loading, setLoading] = useState(true);

    // const getVPNServers = async () => {
    //     console.log('call')
    //     setLoading(true);
    //     try {
    //         const response = await fetch('http://www.vpngate.net/api/iphone/');
    //         if (!response.ok) throw new Error('Network response was not ok');
    //         const data = await response.text();

    //         const parts = data.split('#');
    //         if (parts.length < 2) {
    //             throw new Error('Unexpected data format');
    //         }

    //         const csvString = parts[1].split('*').join('');
    //         Papa.parse(csvString, {
    //             header: false,
    //             skipEmptyLines: true,
    //             complete: (results) => {
    //                 const csvList = results.data;
    //                 const header = csvList[0];
    //                 const servers = csvList.slice(1).map((row) => {
    //                     const tempJson = {};
    //                     for (let j = 0; j < header.length; j++) {
    //                         tempJson[header[j]] = row[j];
    //                     }
    //                     return tempJson;
    //                 });
    //                 // setVpnServers(servers);
    //                 // console.log('----------servers', servers)
    //                 setFilteredVpnServers(servers);
    //                 setLoading(false); // Hide loading spinner after fetching
    //             },
    //         });
    //     } catch (error) {
    //         console.error('Error fetching or processing data:', error);
    //         setLoading(false); // Hide loading spinner on error
    //     }
    // };



    const getVPNServers = async () => {
        console.log('call');
        setLoading(true);
        try {
            const response = await fetch('http://www.vpngate.net/api/iphone/');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.text();
    
            const parts = data.split('#');
            if (parts.length < 2) {
                throw new Error('Unexpected data format');
            }
    
            const csvString = parts[1].split('*').join('');
            Papa.parse(csvString, {
                header: false,
                skipEmptyLines: true,
                complete: async (results) => {
                    const csvList = results.data;
                    const header = csvList[0];
                    const servers = csvList.slice(1).map((row) => {
                        const tempJson = {};
                        for (let j = 0; j < header.length; j++) {
                            tempJson[header[j]] = row[j];
                        }
                        return tempJson;
                    });
    
                    // Fetch region data for each server based on IP
                    const serversWithRegion = await Promise.all(
                        servers.map(async (server) => {
                            const ip = server.IP; // Extract IP from server
                            if (ip) {
                                const regionResponse = await fetch(`https://ipinfo.io/${ip}/json`);
                                const regionData = await regionResponse.json();
                                // Combine the original server data with the region data
                                return { ...server, region: regionData.region };
                            }
                            return server; // Return the server as-is if no IP
                        })
                    );
                    // console.log('SERVER-----------------', serversWithRegion)
                    setFilteredVpnServers(serversWithRegion);
                    setLoading(false); // Hide loading spinner after fetching
                },
            });
        } catch (error) {
            console.error('Error fetching or processing data:', error);
            setLoading(false); // Hide loading spinner on error
        }
    };
    
    useEffect(() => {
        getVPNServers();
    }, []);


  const reloadServers = () => {
    getVPNServers();
  };


  const [vpnList, setVpnList] = useState([]);
   useEffect(() => {
    // Initialize VPNs
    initVpn();
  

  
  }, []);

  const initVpn = async () => {
    const vpnList = [
      {
        country: "Japan",
        username: "vpn",
        password: "vpn",
        config: await fetchConfigFile(),
      },
 
    ];
    setVpnList(vpnList);
    // setSelectedVpn(vpnList[0]);
  };






  // Utility to determine signal strength based on speed
  const getSignalStrength = (speed) => {
    if (speed > 100000000) {
      return 4; // Strong signal
    } else if (speed > 50000000) {
      return 3; // Good signal
    } else if (speed > 10000000) {
      return 2; // Moderate signal
    } else {
      return 1; // Weak signal
    }
  };

  // Dynamically calculate signal strength
  const signalStrength = filteredVpnServers ? getSignalStrength(filteredVpnServers.Speed) : 1;

  // Function to render signal bars based on signal strength
  const renderSignalBars = (signalStrength) => {
    const bars = [];
    for (let i = 1; i <= 4; i++) {
      bars.push(
        <View
          key={i}
          style={[
            styles.signalBar,
            { height: 10 * i },
            // { opacity: i <= signalStrength ? 1 : 0.1 } // Dim the bars based on signal strength
            i <= signalStrength ? styles.activeBar : styles.inactiveBar,
        ]}
        />
      );
    }
    return bars;
  };
  






  const fetchConfigFile = async () => {
    return configFile;
    // return JAPAN_OVPN_CONFIG;
  };






    const handleSearch = (text) => {
        
        setSearch(text);
        const filtered = filteredVpnServers.filter((vpn) => {
            const country = vpn.CountryLong ? vpn.CountryLong.toLowerCase() : '';
            const ip = vpn.IP ? vpn.IP.toLowerCase() : '';
            return country.includes(text.toLowerCase()) || ip.includes(text.toLowerCase());
        });
        setFilteredVpnServers(filtered);
    };

    const handleLocationSelect = (location) => {
        
        setSelectedVpn(location);
        navigation.navigate('HomeScreen', { selectedVpn: location });
    };

    // const renderVpnItem = ({ item }) => (
    //     <TouchableOpacity
    //         style={[styles.locationItem, selectedVpn?.HostName === item.HostName && styles.selectedLocationItem]}
    //         onPress={() => handleLocationSelect(item)}
    //     >
    //         <View style={styles.locationInfo}>
    //             <CountryFlag isoCode={item.CountryShort} size={32} />
    //             <View style={styles.locationDetails}>
    //                 <Text style={styles.locationText}>{item.CountryLong}</Text>
    //                 <Text style={styles.cityText}>{item.HostName}</Text>
    //             </View>
    //         </View>
    //         <Image source={Images.InternetWaves} />
          
    //     </TouchableOpacity>
    // );


    const renderVpnItem = ({ item }) => {
        // Calculate the signal strength for the current item
        const signalStrength = item ? getSignalStrength(item.Speed) : 1;
      
        return (
          <TouchableOpacity
            style={[
              styles.locationItem,
              selectedVpn?.HostName === item.HostName && styles.selectedLocationItem
            ]}
            onPress={() => handleLocationSelect(item)}
          >
            <View style={styles.locationInfo}>
              <CountryFlag isoCode={item.CountryShort} size={32} />
              <View style={styles.locationDetails}>
                <Text style={styles.locationText}>{item.CountryLong}</Text>
                <Text style={styles.cityText}>{item.region}</Text>
              </View>
            </View>
            {/* Render the signal bars based on signal strength */}
            <View style={styles.signalBarsContainer}>
              {renderSignalBars(signalStrength)}
            </View>
          </TouchableOpacity>
        );
      };
      
      
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Change Location</Text>
            <View style={styles.searchContainer}>
            <Image source={Images.Search} />
          
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#888"
                    value={search}
                    onChangeText={handleSearch}
                />
            </View>
            {/* <FlatList
                    data={vpnList}
                    keyExtractor={(item) => item.HostName}
                    renderItem={renderVpnItem}
                    contentContainerStyle={styles.listContainer}
                /> */}
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="orange" />
                </View>
            ) : (
                <FlatList
                    data={filteredVpnServers}
                    keyExtractor={(item) => item.HostName}
                    renderItem={renderVpnItem}
                    contentContainerStyle={styles.listContainer}
                />
            )}
             <TouchableOpacity style={styles.reloadButton} onPress={reloadServers}>
        {/* <Text style={styles.buttonText}>Reload</Text> */}
        
        <Ionicons name="reload-circle" color={'orange'} size={60} />
      </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c161b',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: 'white',
    },
    listContainer: {
        paddingBottom: 20,
    },
    locationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        paddingHorizontal: 10,
    },
    selectedLocationItem: {
        backgroundColor: 'orange',
    },
    locationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationDetails: {
        marginLeft: 10,
    },
    locationText: {
        color: 'white',
        fontSize: 16,
    },
    cityText: {
        color: '#ccc',
        fontSize: 14,
    },
      reloadButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    // backgroundColor: "orange",
    borderRadius: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },




   // Container for the signal bars
   signalBarsContainer: {
    flexDirection: 'row',

    alignItems: 'flex-end',
    marginTop: 1,
  },
  // Single signal bar style
  signalBar: {
    width: 6,
    // height: 20,
    backgroundColor: '#00ff00', // Green bars
    marginHorizontal: 2,
  },

  activeBar: {
    backgroundColor: 'green',
  },
  inactiveBar: {
    backgroundColor: '#ccc',
  },
});

export default LocationSelectionScreen;
