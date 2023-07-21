import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Circle from '../../assets/images/Circle.svg'
const ChannelList = (props) => {
    return (
        <View>
            <Pressable onPress={props.onPress} style={{ borderColor: '#FF3974', borderWidth: 2, borderRadius: 12, height: 120, width: 360, }}>
                <View style={{ marginLeft: 23, marginTop: 5 }}>
                    <Text style={{ color: '#372329', fontSize: 22, fontFamily: 'Nunito-Normal' }}>{props.Txt} </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginLeft: 50, marginTop: 2 }}>
                    <Circle />
                    <View>
                        <Text style={{ color: '#372329', fontSize: 20, fontFamily: 'Nunito-Normal' }}>{props.Txet}</Text>
                        <Text style={{ marginTop: -10, color: '#372329', fontSize: 12 }}>...</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 8, marginLeft: 35, marginTop: 3 }}>
                    <Text style={{ color: '#FF3974', fontSize: 12, fontFamily: 'Nunito-Normal' }}>Jenny:</Text>
                    <Text style={{ color: '#372329', fontSize: 12, fontFamily: 'Nunito-Normal' }}>Yeah, I have been thinking about it for a long time...</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 19, marginLeft: 35, marginTop: 3 }}>
                    <Text style={{ color: '#FF3974', fontSize: 12, fontFamily: 'Nunito-Normal' }}>Lina:</Text>
                    <Text style={{ color: '#372329', fontSize: 12, fontFamily: 'Nunito-Normal' }}>Hey girls, Wassup!!</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default ChannelList
const styles = StyleSheet.create({})