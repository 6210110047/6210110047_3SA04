import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text >{code}</Text>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },

})