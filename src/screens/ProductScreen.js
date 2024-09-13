import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const ProductScreen = () => {
    const navigation = useNavigation();
  return (
   
    <View>
   <Text>ProductScreen</Text>
    <Button title="Go to Products details" onPress={() => navigation.navigate('ProductDetailScreen')} />
  </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})