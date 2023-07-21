import { Image, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const SignUp = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigation()
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                navigation.navigate('TabNavigation')

            }
        } catch (e) {
            console.log(e, 'token ni h');
        }
    };



    const validate = () => {
        let isvalid = true
        let errors = {}
        if (!values.fullName) {
            errors.fullName = 'Name is required'
            isvalid = false
        }
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
                const response = await axios.post('womansafetyapp-production.up.railway.app/auth/signUp', values);
                navigation.navigate('TabNavigation')
                console.log(response.data, 'response data successfully')
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('name', response.data.fullName);
                await AsyncStorage.setItem('email', response.data.email);
                console.log('token signUp successfully');
                setValues({
                    fullName: "",
                    email: "",
                    password: ""
                });

            } catch (error) {
                console.error(error);
            }
        }

    }


    const passwordHandler = () => {
        setShowPassword(!showPassword)
    }
    return (

        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <View style={{ flex: 1, backgroundColor: '#FF3974' }}>
                <View style={{ flex: 0.9 }} showsVerticalScrollIndicator={false}>
                    <Image source={require('../../assets/images/Signup.png')} />
                </View>
                <View style={{ flex: 1.26, marginLeft: 23, marginRight: 30, }}>
                    <Text style={{ fontSize: 36, fontFamily: 'Nunito-Bold', color: '#FFECD0' }}>Register</Text>
                    <View style={{ marginLeft: 8, gap: 7, marginTop: 20 }}>
                        <Text style={{ color: '#FFECD0' }}>Full Name</Text>
                        <TextInput
                            value={values.fullName}
                            keyboardType='default'
                            color='#FFECD0'
                            onChangeText={(event) => setValues((prev) => ({ ...prev, fullName: event }))}
                            style={{ borderWidth: 1, borderRadius: 10, borderColor: '#FFECD0', height: 40, width: 309 }}
                        />

                        {errors.fullName && <Text >{errors.fullName}</Text>}
                    </View>

                    <View style={{ marginLeft: 8, gap: 7, marginTop: 20 }}>
                        <Text style={{ color: '#FFECD0' }}>Email</Text>

                        <TextInput keyboardType='email-address' value={values.email} color='#FFECD0'
                            onChangeText={(event) => setValues((prev) => ({ ...prev, email: event }))} style={{
                                borderWidth: 1, borderRadius: 10,
                                borderColor: '#FFECD0', height: 40, width: 309
                            }} />
                        {errors.email && <Text >{errors.email}</Text>}
                    </View>
                    <View style={{ marginLeft: 8, gap: 7, marginTop: 20 }}>
                        <Text style={{ color: '#FFECD0' }}>Password</Text>
                        <View style={{ position: 'relative' }}>
                            <TextInput
                                secureTextEntry={!showPassword}
                                color="#FFECD0"
                                value={values.password}
                                onChangeText={(event) => setValues((prev) => ({ ...prev, password: event }))}
                                style={{ borderWidth: 1, borderRadius: 10, borderColor: '#FFECD0', height: 40, width: 309 }}
                            />
                            {errors.password && <Text style={{ color: '#372329', }}>{errors.password}</Text>}
                            <TouchableOpacity onPress={passwordHandler} style={{ position: 'absolute', right: 35, top: 10 }}>
                                <Icon name={showPassword ? 'eye' : 'eye-off'} size={25} color="#FFECD0" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 3, marginTop: 5 }}>
                        <View >
                            <Image source={require('../../assets/images/google.png')} style={{ width: 55, height: 55 }} />
                        </View>
                        <View>
                            <Image source={require('../../assets/images/fb.png')} style={{ width: 55, height: 55 }} />
                        </View>

                        <View>
                            <Image source={require('../../assets/images/apple.png')} style={{ width: 55, height: 55 }} />
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 8 }}>
                            <Text style={{ fontFamily: 'Nunito-Normal', fontSize: 16, color: '#FFECD0', textAlignVertical: 'bottom' }}>
                                Already Member?  </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('login')} style={{ display: 'flex', flexDirection: 'column-reverse' }} >
                                <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 16, color: '#FFECD0', textAlign: 'center', }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[{ width: 144, height: 60, backgroundColor: '#FFECD0', justifyContent: 'center', borderRadius: 7 }, styles.Login]}>
                            <TouchableOpacity onPress={createUser} style={[{ width: 144, height: 60, backgroundColor: '#FFECD0', justifyContent: 'center', borderRadius: 7 }, styles.Login]}>
                                <Text style={{ color: '#372329', fontSize: 24, textAlign: 'center' }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View  >
            </View>
        </>

    )
}

export default SignUp

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















{/* <Text>Welcome {user.email}</Text> */ }

    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();



// const response = await axios.post('womansafetyapp-production.up.railway.app/test',{k:'ml'});


// function onAuthStateChanged(user) {
    //     setUser(user);
    //     navigation.navigate('List')
    //     if (initializing) setInitializing(false);
    // }
    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber;
    // }, []);
    // if (initializing) return null;
    // if (!user) {
    //     return (
    //         <View>
    //             <Text>Login</Text>
    //         </View>
    //     );
    // }









    // if (validate()) {
        //     auth()
        //         .createUserWithEmailAndPassword(values.email, values.password)
        //         .then(() => {
        //             console.log('User account created & signed in!');
        //             navigation.navigate('List')
        //             setValues('')
        //         })

        //         .catch(error => {
        //             if (error.code === 'auth/email-already-in-use') {
        //                 console.log('That email address is already in use!');
        //             }

        //             if (error.code === 'auth/invalid-email') {
        //                 console.log('That email address is invalid!');
        //             }

        //             console.error(error);
        //         });
        // }