import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Weather from './components/Weather'
import WeatherScreen from './components/WeatherScreen'
import ZipCodeScreen from './components/ZipCodeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default function App() {
//   const doIt = () => {
//     console.log("Hello from console")
//   }
//   return (

//     <View style={styles.container}>
//       <Weather zipCode="90110" />
//       <StatusBar style="auto" />
//     </View>

//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Constants.statusBarHeight
//   },
// });