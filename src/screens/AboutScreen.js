import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
   
      <View style={styles.container}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.subtitle}>Regularly ci</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c161b',
  },
})