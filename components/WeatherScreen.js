import React from 'react';
import { StatusBar, View } from "react-native";
import Weather from "./Weather";

export default function WeatherScreen({ route }) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode} />
            <StatusBar style="auto" />
        </View>
    );
}