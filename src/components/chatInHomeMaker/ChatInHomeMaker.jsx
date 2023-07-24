import { Image, StyleSheet, TextInput, View, Text, KeyboardAvoidingView, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import socketServices from '../socketIo/SocketIo'
import { useNavigation } from '@react-navigation/native'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';
const ChatInHomeMaker = () => {
    const navigation = useNavigation()
    const [message, setMessage] = useState('')
    const [data, setData] = useState([])




    useEffect(() => {
        socketServices.initializeSocket()
    }, [])

    useEffect(() => {
        socketServices.on('receive_message', (msg) => {
            console.log('message received in reactnative app', msg);
            let cloneArray = [...data]
            setData(cloneArray.concat(msg))

        })
    }, [data])

    const sendMessage = () => {
        if (message) {

            socketServices.emit('send_message', message);
            setMessage('')
            return
        }
        alert('Please enter a message')
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={{ flex: 0.1, display: 'flex', flexDirection: 'column', marginTop: pixelSizeVertical(30), }}>


                <View >

                    <Pressable onPress={() => navigation.navigate('TabNavigation')} style={{ marginLeft: pixelSizeHorizontal(20) }}>

                        <Image source={require('../../assets/images/leftArrow.png')} style={{ width: widthPixel(30), height: heightPixel(30), top: pixelSizeVertical(30) }} />
                        <Text style={{ fontSize: fontPixel(25), fontFamily: 'Nunito-Normal', color: '#372329', textAlign: 'center', }}>Homemakers 🏠</Text>
                    </Pressable>
                </View>



            </View>
            <View style={{ flex: 0.1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', bottom: pixelSizeVertical(15) }}>

                <TextInput
                    placeholder='Enter Message' style={{ width: '80%', borderWidth: 1, borderRadius: 10 }}
                    onChangeText={text => setMessage(text)} value={message}
                />

                <TouchableOpacity onPress={sendMessage} style={{ borderWidth: 1, justifyContent: 'center', borderRadius: 10, paddingHorizontal: 2, backgroundColor: '#FF3974' }}>

                    <Text style={{ color: '#FFECD0', fontSize: fontPixel(20), fontFamily: 'Nunito-Bold', }}>Send</Text>
                </TouchableOpacity>

            </View>
            <View style={{ marginTop: pixelSizeVertical(25), paddingHorizontal: pixelSizeHorizontal(20) }}>

                {
                    data.map((value, index) => {

                        return (


                            <Text key={index} style={{ color: '#372329', fontSize: fontPixel(25), fontFamily: 'Nunito-SemiBold' }}>{value}</Text>

                        )
                    })
                }

            </View>


        </KeyboardAvoidingView>
    )
}

export default ChatInHomeMaker

const styles = StyleSheet.create({})


