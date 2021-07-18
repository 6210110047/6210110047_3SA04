import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.textMain}>--- {props.name} ---</Text> 
            <Text style={styles.textMain}>{props.main}</Text>
            <Text style={styles.textDescription}>{props.description}</Text>
            <View style={styles.view}>
                <Text style={styles.textTemp}>{props.temp} </Text>
                <Text style={styles.textC}> °C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textMain: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgb(255,255,255)',
        fontSize: 36,
        margin: 10
    },
    textDescription: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontSize: 30,
        margin: 10
    },
    textTemp: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontWeight: 'bold',
        fontSize: 36,
        margin: 10
    },
    textC: {
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontWeight: 'normal',
        fontSize: 28
    },
    view: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})