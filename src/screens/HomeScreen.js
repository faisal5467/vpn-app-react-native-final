import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate('ProductScreen')} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})