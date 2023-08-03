import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Circle from '../../assets/images/Circle.svg'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel, } from '../../responsiveness/Responsiveness';
const ChannelList = (props) => {
    return (
        <View>
            <Pressable onPress={props.onPress} style={{ borderColor: '#FF3974', borderWidth: 2, borderRadius: 12, height: heightPixel(140), width: widthPixel(300), }}>
                <View style={{ marginLeft: pixelSizeHorizontal(23), marginTop: pixelSizeVertical(5) }}>
                    <Text style={{ color: '#372329', fontSize: fontPixel(22), fontFamily: 'Nunito-Normal' }}>{props.Txt} </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginLeft: pixelSizeHorizontal(50), marginTop: pixelSizeVertical(2) }}>
                    <Circle />
                    <View>
                        <Text style={{ color: '#372329', fontSize: fontPixel(20), fontFamily: 'Nunito-Normal' }}>{props.Txet}</Text>
                        <Text style={{ marginTop: pixelSizeVertical(-10), color: '#372329', fontSize: fontPixel(12) }}>...</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 8, marginLeft: pixelSizeHorizontal(35), marginTop: 3 }}>
                    <Text style={{ color: '#FF3974', fontSize: fontPixel(12), fontFamily: 'Nunito-Normal' }}>Jenny:</Text>
                    <View>

                        <Text style={{ color: '#372329', fontSize: fontPixel(12), fontFamily: 'Nunito-Normal' }}>Yeah, I have been thinking about it</Text>
                        <Text style={{ color: '#372329', fontSize: fontPixel(12), fontFamily: 'Nunito-Normal' }}>  for a long time...</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', gap: 19, marginLeft: pixelSizeHorizontal(35), marginTop: 3 }}>
                    <Text style={{ color: '#FF3974', fontSize: fontPixel(12), fontFamily: 'Nunito-Normal' }}>Lina:</Text>
                    <Text style={{ color: '#372329', fontSize: fontPixel(12), fontFamily: 'Nunito-Normal' }}>Hey girls, Wassup!!</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default ChannelList
const styles = StyleSheet.create({})