import { Image, StyleSheet, TextInput, View, Text, KeyboardAvoidingView, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import socketServices from '../socketIo/SocketIo'
import { useNavigation } from '@react-navigation/native'
const ChatInWork = () => {
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
            <View style={{ flex: 0.1, display: 'flex', flexDirection: 'column', marginTop: 30, }}>


                <View >

                    <Pressable onPress={() => navigation.navigate('TabNavigation')} style={{ marginLeft: 20 }}>

                        <Image source={require('../../assets/images/leftArrow.png')} style={{ width: 30, height: 30, top: 30 }} />
                        <Text style={{ fontSize: 25, fontFamily: 'Nunito-Normal', color: '#372329', textAlign: 'center', }}>Woman at Work 💼</Text>
                    </Pressable>
                </View>



            </View>
            <View style={{ flex: 0.1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', bottom: 0 }}>

                <TextInput
                    placeholder='Enter Message' style={{ width: '80%', borderWidth: 1, borderRadius: 10 }}
                    onChangeText={text => setMessage(text)} value={message}
                />

                <TouchableOpacity onPress={sendMessage} style={{ borderWidth: 1, justifyContent: 'center', borderRadius: 10, paddingHorizontal: 2, backgroundColor: '#FF3974' }}>

                    <Text style={{ color: '#FFECD0', fontSize: 20, fontFamily: 'Nunito-Bold', }}>Send</Text>
                </TouchableOpacity>

            </View>
            <View style={{ marginTop: 25, paddingHorizontal: 20 }}>

                {
                    data.map((value, index) => {

                        return (


                            <Text key={index} style={{ color: '#372329', fontSize: 25, fontFamily: 'Nunito-SemiBold' }}>{value}</Text>

                        )
                    })
                }

            </View>


        </KeyboardAvoidingView>
    )
}

export default ChatInWork

const styles = StyleSheet.create({})



























// import React, { useEffect, useRef, useState } from 'react';
// import { View, Text, TextInput, Button, ScrollView } from 'react-native';
// import io from 'socket.io-client';

// const Chat = () => {
//     const [messages, setMessages] = useState([]);
//     const inputRef = useRef(null);
//     const socketRef = useRef(null);

//     useEffect(() => {
//         socketRef.current = io('http:localhost:3000');

//         const handleChatMessage = (msg) => {
//             setMessages((prevMessages) => [...prevMessages, msg]);
//         };

//         socketRef.current.on('chat message', handleChatMessage);

//         return () => {
//             socketRef.current.off('chat message', handleChatMessage);
//             socketRef.current.disconnect();
//         };
//     }, []);

//     const handleSubmit = () => {
//         const message = inputRef.current?.value;
//         if (message) {
//             socketRef.current.emit('chat message', message);
//             inputRef.current.clear();
//         }
//     };

//     return (
//         <View style={{ flex: 1 }}>
//             <ScrollView>
//                 {messages.map((msg, index) => (
//                     <Text key={index} style={{ padding: 10, backgroundColor: index % 2 === 0 ? '#efefef' : 'white' }}>
//                         {msg}
//                     </Text>
//                 ))}
//             </ScrollView>
//             <View style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderColor: '#ccc' }}>
//                 <TextInput
//                     ref={inputRef}
//                     style={{ flex: 1, padding: 10 }}
//                     placeholder="Type a message..."
//                     autoCorrect={false}
//                     autoCompleteType="off"
//                 />
//                 <Button title="Send" onPress={handleSubmit} />
//             </View>
//         </View>
//     );
// };

// export default Chat;





































// import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native'
// import React, { useState } from 'react'
// // import socketServices from '../socketIo/SocketIo';
// import { io } from 'socket.io-client'
// const ChatBox = () => {
//     const [message, setMessage] = useState('');
//     // const [data, setData] = useState([]);
//     // useEffect(() => {
//     //     socketServices.initialSocket();
//     // }, [])
//     const socket = io();

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <View style={{ flex: 1, padding: 50, }}>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                     <View style={{ flex: 0.8 }}>

//                         <TextInput placeholder='Enter your message...' style={{ height: 42, borderRadius: 6, borderWidth: 1 }}
//                             onChangeText={text => setMessage(text)}
//                             value={message}
//                         />
//                     </View>
//                     <View style={{ flex: 0.2, height: 42, }}>

//                         <Button title='Send' />
//                     </View>
//                 </View>

//             </View>

//         </SafeAreaView>
//     )
// }

// export default ChatBox

// const styles = StyleSheet.create({})