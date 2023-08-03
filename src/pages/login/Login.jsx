import { Image, StatusBar, StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigation()


    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const validate = () => {
        let isvalid = true
        let errors = {}

        if (!values.email) {
            errors.email = "Email is required"
            isvalid = false
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid email"
            isvalid = false
        }
        if (!values.password) {
            errors.password = "Password is required"
            isvalid = false

        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters"
            isvalid = false
        }
        setErrors(errors)
        return isvalid

    }
    const createUser = async () => {
        if (validate()) {
            try {
                const response = await axios.post('https://womansafetyapp-production.up.railway.app/auth/login', values);


                setValues({

                    email: "",
                    password: ""
                });
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('name', response.data.fullName);
                await AsyncStorage.setItem('email', response.data.email);

                navigation.navigate('TabNavigation')

            } catch (error) {
                (error, error.message);
            }

        }
    }
    const passwordHandler = () => {
        setShowPassword(!showPassword)
    }
    return (

        <View style={{ flex: 1, backgroundColor: '#FF3974' }}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <View style={{ flex: 0.8, }}>
                <Image source={require('../../assets/images/curve.png')} style={{ width: '100%', resizeMode: 'stretch', height: '100%' }} />
            </View>
            <ScrollView style={{ flex: 1.7, marginLeft: pixelSizeHorizontal(23), marginRight: pixelSizeHorizontal(30), }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: fontPixel(36), fontFamily: 'Nunito-Bold', color: '#FFECD0' }}>Login</Text>
                <View style={{ marginBottom: pixelSizeVertical(20) }} showsHorizontalScrollIndicator={false}>

                    <View style={{ marginLeft: pixelSizeHorizontal(7), gap: 7, marginTop: pixelSizeVertical(30) }}>
                        <Text style={{ color: '#FFECD0' }}>Email</Text>
                        <TextInput keyboardType='email-address' color='#FFECD0' value={values.email}
                            onChangeText={(event) => setValues((prev) => ({ ...prev, email: event }))} style={{
                                borderWidth: 1, borderRadius: 10,
                                borderColor: '#FFECD0', height: heightPixel(45), width: widthPixel(309)
                            }} />
                        {errors.email && <Text>{errors.email}</Text>}
                    </View>
                    <View style={{ marginLeft: pixelSizeHorizontal(8), gap: 7, marginTop: pixelSizeVertical(20) }}>
                        <Text style={{ color: '#FFECD0' }}>Password</Text>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                secureTextEntry={!showPassword}
                                color="#FFECD0"
                                value={values.password}
                                onChangeText={(event) => setValues((prev) => ({ ...prev, password: event }))}

                                style={{ borderWidth: 1, borderRadius: 10, borderColor: '#FFECD0', height: heightPixel(45), width: widthPixel(309) }}
                            />
                            {errors.password && <Text>{errors.password}</Text>}
                            <TouchableOpacity onPress={passwordHandler} style={{ position: 'absolute', right: pixelSizeHorizontal(20), top: pixelSizeVertical(4) }}>
                                <Icon name={showPassword ? 'eye' : 'eye-off'} size={25} color="#FFECD0" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: pixelSizeVertical(10), }}>
                    <Text style={{ color: '#FFECD0', fontSize: fontPixel(14), fontFamily: 'Nunito-Bold', }}>Forgot Password?</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 3, marginTop: 5 }}>

                    <View >
                        <Image source={require('../../assets/images/google.png')} style={{ width: widthPixel(55), height: heightPixel(55) }} />
                    </View>
                    <View>
                        <Image source={require('../../assets/images/fb.png')} style={{ width: widthPixel(55), height: heightPixel(55) }} />
                    </View>

                    <View>
                        <Image source={require('../../assets/images/apple.png')} style={{ width: widthPixel(55), height: heightPixel(55) }} />
                    </View>
                </View>
            </ScrollView>

            <View style={{ flex: 0.3, display: 'flex', marginLeft: pixelSizeHorizontal(23), justifyContent: 'center', marginRight: pixelSizeHorizontal(30), flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: pixelSizeHorizontal(8), marginTop: pixelSizeVertical(18) }}>
                    <Text style={{ fontFamily: 'Nunito-Normal', fontSize: fontPixel(16), color: '#FFECD0', }}>

                        New Here?  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signUp')} style={{ display: 'flex', }} >
                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: fontPixel(16), color: '#FFECD0', textAlign: 'center', }}>Register</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={() => createUser()} style={[{ width: widthPixel(144), height: heightPixel(60), backgroundColor: '#FFECD0', justifyContent: 'center', borderRadius: 7 }, styles.Login]}>
                    <Text style={{ color: '#372329', fontSize: fontPixel(24), textAlign: 'center', }}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

export default Login

const styles = StyleSheet.create({
    Login: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 7
    },
    icon: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 24
    }
})











