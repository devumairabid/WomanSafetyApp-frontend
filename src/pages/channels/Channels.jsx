import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChannelList from '../../components/channelList/ChannelList'
import { useNavigation } from '@react-navigation/native'
const Channels = (props) => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: '#FFECD0' }}>
            <View style={{ flex: 0.25, marginTop: 27 }}>
                <Text style={{ color: '#372329', fontSize: 30, fontFamily: 'Nunito-SemiBold', textAlign: 'center' }}>Channels</Text>
            </View>
            <View style={{ flex: 1, gap: 20, alignItems: 'center' }}>
                <ChannelList Txt='Women at Work 💼' Txet='56/3429 online' onPress={() => navigation.navigate('ChatInWork')} />
                <ChannelList Txt='School Girls 🏫' Txet='38/1856 online' onPress={() => navigation.navigate('ChatInSchool')} />
                <ChannelList Txt='Homemakers 🏠' Txet='75/2951 women online' onPress={() => navigation.navigate('ChatInHomeMaker')} />
            </View>

        </View>
    )
}

export default Channels

const styles = StyleSheet.create({})