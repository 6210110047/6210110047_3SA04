import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        name: '',
        main: 'main',
        description: 'description',
        temp: 0,
        feelsLike: 0,
        icon: '',
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=28c099ab9b2578c63715272399321025`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        feelsLike: json.main.feels_like,
                        icon:json.weather[0].icon
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../assets/weather.jpeg')} style={styles.backdrop}>
            <View style={styles.blackBarrier}>
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
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 10,
        height: "50%",
        marginTop: "15%",
        marginLeft: 200,
        marginRight:200,
        padding: 10
    },
    textZipCode: {
        paddingTop: 30,
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontSize: 24
    },
})