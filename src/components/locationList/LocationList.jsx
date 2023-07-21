import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LocationList = (props) => {
    const navigation = useNavigation()

    return (
        <View style={{
            width: '80%', borderWidth: 1, borderColor: '#FF3974', height: '20%', flex: 1, borderRadius: 12,
            display: 'flex', flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '5%'
        }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>

                <Image source={require('../../assets/images/location.png')} style={{ width: 20, height: 25 }} />
                <View style={{ marginVertical: 10 }}>

                    <Text style={{ color: '#FF3974', fontSize: 24, fontFamily: 'Nunito-SemiBold', }}>{props.text}</Text>
                    <Text style={{ color: '#372329', fontSize: 14, fontFamily: 'Nunito-Regular' }}>{props.myText}</Text>
                </View>
            </View>
            <TouchableOpacity style={{ width: 40 }} onPress={props.onPress} >

                <Image source={require('../../assets/images/nextIcon.png')} style={{ width: 12, height: 20, marginLeft: 20 }} />
            </TouchableOpacity>
        </View>
    )
}

export default LocationList

const styles = StyleSheet.create({})