import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.zipItem}>
            <Text styles={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)
const _keyExtractor = item => item.code

export default function ZipCodeScreen() {

    const [availableZipItems] = useState([

    ])

    useEffect(() => {
        console.log(`fetching data`)

        fetch(`https://raw.githubusercontent.com/rathpanyowat/Thai-zip-code-latitude-and-longitude/master/data.json`)
            .then((response) => response.json())
            .then((json) => {
                for (let instace of json) {
                    var check = true
                    for (let checkdup of availableZipItems) {
                        if (instace["province"] == checkdup.place) {
                            check = false
                            break
                        }
                    }
                    if (check == true) {
                        availableZipItems.push({
                            place: instace["province"],
                            code: instace["zip"]
                        });
                    }
                }
            })
            .catch((error) => {
                console.warn(error);
            });
    })

    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 200,
        marginRight: 200,
        padding: 10
    },
    zipPlace: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 18,
    },
    zipCode: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
})