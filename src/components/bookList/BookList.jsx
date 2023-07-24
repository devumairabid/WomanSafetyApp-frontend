import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';
const BookList = (props) => {
    const navigation = useNavigation()

    return (
        <Pressable onPress={props.onPress} style={{
            width: '80%', borderWidth: 1, borderColor: '#FF3974', height: '20%', flex: 1, borderRadius: 12, backgroundColor: '#FF3974',
            display: 'flex', flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '5%'
        }}>
            <View onPress={props.onPress} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>


                <View style={{ marginVertical: pixelSizeVertical(10) }}>

                    <Text style={{ color: '#FFECD0', fontSize: fontPixel(24), fontFamily: 'Nunito-SemiBold', }}>{props.text}</Text>

                </View>
            </View>
            <View >

                <Image source={require('../../assets/images/Icon2.png')} style={{ width: widthPixel(15), height: heightPixel(16), marginLeft: pixelSizeHorizontal(20), }} />
            </View>
        </Pressable>
    )
}

export default BookList

const styles = StyleSheet.create({})