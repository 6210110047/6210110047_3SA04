import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
        })
    return (
        <ImageBackground source={require('../assets/weather.jpeg')} style={styles.backdrop}>
            <View style={styles.blackBarrier}>
                <Text style={styles.textZipCode}>Zip code is {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    blackBarrier: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: '40%',
        width: '100%'
    },
    textZipCode: {
        paddingTop: 30,
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontSize: 24
    },
})