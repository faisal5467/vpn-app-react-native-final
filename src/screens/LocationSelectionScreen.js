
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CountryFlag from "react-native-country-flag";

const locations = [
    { id: 1, country: 'United Kingdom', city: 'London', flag: 'GB', signalStrength: 4 },
    { id: 2, country: 'Canada', city: 'Victoria', flag: 'CA', signalStrength: 3 },
    { id: 3, country: 'Canada', city: 'Ottawa', flag: 'CA', signalStrength: 4 },
    { id: 4, country: 'Germany', city: 'Berlin', flag: 'DE', signalStrength: 4 },
    { id: 5, country: 'Thailand', city: 'Bangkok', flag: 'TH', signalStrength: 3 },
    { id: 6, country: 'Iceland', city: 'Reykjavik', flag: 'IS', signalStrength: 4 },
    { id: 7, country: 'Vietnam', city: 'Ho Chi Minh', flag: 'VN', signalStrength: 3 },
    { id: 8, country: 'Vietnam', city: 'Ha Noi', flag: 'VN', signalStrength: 3 },
    // Add more locations as needed
];
const LocationSelectionScreen = ({ navigation, route }) => {
    const [search, setSearch] = useState('');
    const [filteredLocations, setFilteredLocations] = useState(locations);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleSearch = (text) => {
        setSearch(text);
        const filtered = locations.filter((location) => {
            const country = location.country ? location.country.toLowerCase() : '';
            const city = location.city ? location.city.toLowerCase() : '';
            return country.includes(text.toLowerCase()) || city.includes(text.toLowerCase());
        });
        setFilteredLocations(filtered);
    };

    const handleLocationSelect = (location) => {
        console.log('whats i', location)
        setSelectedLocation(location);
        navigation.navigate('HomeScreen', { selectedLocation: location });
    };

    const renderLocationItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.locationItem,
                selectedLocation?.id === item.id && styles.selectedLocationItem,
            ]}
            onPress={() => handleLocationSelect(item)}
        >
            <View style={styles.locationInfo}>
                <CountryFlag isoCode={item.flag} size={32} />
                <View style={styles.locationDetails}>
                    <Text style={styles.locationText}>{item.country}</Text>
                    <Text style={styles.cityText}>{item.city}</Text>
                </View>
            </View>
            <Icon name="signal-cellular-alt" size={24} color="green" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Change Location</Text>
            <View style={styles.searchContainer}>
                <Icon name="search" size={24} color="white" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#888"
                    value={search}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={filteredLocations}
                renderItem={renderLocationItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
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
});

export default LocationSelectionScreen;
