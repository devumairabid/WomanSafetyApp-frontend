import { StyleSheet, Text, View, Pressable, Image, Alert, TextInput, KeyboardAvoidingView, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import Toast from 'react-native-toast-message';
const FirstList = ({ navigation, route }) => {
    const [mesage, setMesage] = useState('')
    const { myText } = route.params
    const send_message = async () => {
        try {
            if (mesage) {
                const response = await axios.post('womansafetyapp-production.up.railway.app/message/discription', { discription: mesage })
                console.log('response', response.data.discription);
                setMesage('')


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
            console.log(error.message);
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FFECD0' }}>
            <View style={{ flex: 0.1, display: 'flex', flexDirection: 'column', marginTop: 30, }}>
                <Pressable onPress={() => navigation.navigate('TabNavigation')} style={{ marginLeft: 20 }}>
                    <Image source={require('../../../assets/images/leftArrow.png')} style={{ width: 30, height: 30, top: 30 }} />
                    <Text style={{ fontSize: 24, fontFamily: 'Nunito-Normal', color: '#372329', textAlign: 'center', }}>Nearby Xplafé</Text>
                </Pressable>
            </View>

            <View style={{
                flex: 0.1,
                borderWidth: 1, borderRadius: 10, borderColor: 'white', display: 'flex', flexDirection: 'row',
                justifyContent: 'space-around', backgroundColor: 'white', marginHorizontal: 20, marginTop: 30, alignItems: 'center'
            }}>
                <Text style={{ color: '#372329', fontSize: 18, fontFamily: 'Nunito-Normal' }}>
                    {myText}
                </Text>
                <Image source={require('../../../assets/images/location.png')} style={{ width: 20, height: 25 }} />
            </View>
            <View style={{ flex: 0.8, marginHorizontal: 20, marginTop: 50 }}>
                <Text style={{ color: '#372329', fontSize: 20, fontFamily: 'Nunito-Normal' }}>Message</Text>
                <View style={{ flex: 0.9, borderWidth: 1, borderRadius: 10, borderColor: 'white', backgroundColor: 'white' }}>

                    <TextInput value={mesage} onChangeText={txt => setMesage(txt)} style={{ color: '#372329', fontSize: 18, fontFamily: 'Nunito-Normal', marginHorizontal: 20 }} multiline={true} />
                </View>
            </View>
            <View style={{
                flex: 0.1, backgroundColor: '#FF3974', width: '50%', alignSelf: 'center',
                borderRadius: 12, borderWidth: 1, borderColor: '#FF3974', marginBottom: 40, justifyContent: 'center'
            }}>
                <Pressable onPress={send_message} style={{ backgroundColor: '#FF3974', alignItems: 'center', justifyContent: 'center', borderRadius: 12, borderWidth: 1, borderColor: '#FF3974' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Nunito-Normal', }}>Send Message !</Text>
                </Pressable>

            </View>
        </KeyboardAvoidingView>
    )
}

export default FirstList

const styles = StyleSheet.create({})
