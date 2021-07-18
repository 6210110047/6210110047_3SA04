import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.centerText}>
            <Text style={styles.textMain}>--- {props.name} ---</Text> 
            <View style={styles.view}>
                <Text style={styles.textMain}>{props.main}</Text>
                <Text style={styles.textDescription}>{props.description}</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.textTemp}>{props.temp} </Text>
                <Text style={styles.textC}> °C but feels like </Text>
                <Text style={styles.textTemp}>{props.temp} </Text>
                <Text style={styles.textC}> °C </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centerText:{
        marginTop: 30,
        marginBottom: 30,
    },
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