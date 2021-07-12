import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Weather from './components/Weather'


export default function App() {
  const doIt = () => {
    console.log("Hello from console")
  }
  return (
    
    <View style={styles.container}>
      <Weather zipCode="90110" />
      <StatusBar style="auto" />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
});