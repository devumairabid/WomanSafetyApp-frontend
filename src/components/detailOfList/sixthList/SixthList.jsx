import { StyleSheet, Text, View, Pressable, Image, TextInput, KeyboardAvoidingView, Button } from 'react-native'
import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import axios from 'axios'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../../responsiveness/Responsiveness';
const SixthList = ({ navigation, route }) => {
    const [mesage, setMesage] = useState('')
    const { myText } = route.params
    const send_message = async () => {
        try {
            if (mesage) {
                const response = await axios.post('https://womansafetyapp-production.up.railway.app/message/discription', { discription: mesage });
                console.log('response', response.data.discription); // Log the response data
                setMesage('');

                Toast.show({
                    type: 'success',
                    text1: 'Message Sent 👋'
                });
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Please enter a message'
                });
            }
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'An error occurred'
            });
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FFECD0' }}>
            <View style={{ flex: 0.1, display: 'flex', flexDirection: 'column', marginTop: pixelSizeVertical(30), }}>
                <Pressable onPress={() => navigation.navigate('TabNavigation')} style={{ marginLeft: pixelSizeHorizontal(20) }}>
                    <Image source={require('../../../assets/images/leftArrow.png')} style={{ width: widthPixel(30), height: heightPixel(30), top: pixelSizeVertical(30) }} />
                    <Text style={{ fontSize: fontPixel(24), fontFamily: 'Nunito-Normal', color: '#372329', textAlign: 'center', }}>Nearby Xplafé</Text>
                </Pressable>
            </View>

            <View style={{
                flex: 0.1,
                borderWidth: 1, borderRadius: 10, borderColor: 'white', display: 'flex', flexDirection: 'row',
                justifyContent: 'space-around', backgroundColor: 'white', marginHorizontal: pixelSizeHorizontal(20), marginTop: pixelSizeVertical(30), alignItems: 'center'
            }}>
                <Text style={{ color: '#372329', fontSize: fontPixel(18), fontFamily: 'Nunito-Normal' }}>
                    {myText}
                </Text>
                <Image source={require('../../../assets/images/location.png')} style={{ width: widthPixel(18), height: heightPixel(25) }} />
            </View>
            <View style={{ flex: 0.8, marginHorizontal: pixelSizeHorizontal(20), marginTop: pixelSizeVertical(50) }}>
                <Text style={{ color: '#372329', fontSize: fontPixel(23), fontFamily: 'Nunito-Normal' }}>Message</Text>
                <View style={{ flex: 0.9, borderWidth: 1, borderRadius: 10, borderColor: 'white', backgroundColor: 'white' }}>

                    <TextInput value={mesage} onChangeText={txt => setMesage(txt)} style={{ color: '#372329', fontSize: fontPixel(18), fontFamily: 'Nunito-Normal', marginHorizontal: pixelSizeHorizontal(20) }} multiline={true} />
                </View>
            </View>
            <View style={{
                flex: 0.1, backgroundColor: '#FF3974', width: '50%', alignSelf: 'center',
                borderRadius: 12, borderWidth: 1, borderColor: '#FF3974', marginBottom: pixelSizeVertical(40), justifyContent: 'center'
            }}>
                <Pressable onPress={send_message} style={{ backgroundColor: '#FF3974', alignItems: 'center', justifyContent: 'center', borderRadius: 12, borderWidth: 1, borderColor: '#FF3974' }}>
                    <Text style={{ color: 'white', fontSize: fontPixel(20), fontFamily: 'Nunito-Normal', }}>Send Message !</Text>
                </Pressable>

            </View>
        </KeyboardAvoidingView>
    )
}
export default SixthList
const styles = StyleSheet.create({})
