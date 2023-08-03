import { StyleSheet, Text, View, Image, Alert, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
const Profile = (props) => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [uploaded, setUploaded] = useState(false);
    const [imagePath, setImagePath] = useState('');

    const [url, setUrl] = useState('');
    useEffect(() => {
        try {
            getData();
            getUrl();
        } catch (error) {
            (error, error.message);
        }

    },);
    const getData = async () => {
        try {
            const name = await AsyncStorage.getItem('name');
            const email = await AsyncStorage.getItem('email');
            setName(name);
            setEmail(email);

        } catch (error) {
            (error, error.message);
        }
    };
    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('name');
            await AsyncStorage.removeItem('email');
            navigation.navigate('login');
        } catch (error) {
            (error, error.message);
        }

    };
    const getUrl = async () => {
        const url = await AsyncStorage.getItem('image');

        setUrl(url);

    };

    const handleImageUpload = async () => {
        try {
            let options = {
                storageOptions: {
                    path: 'image',
                },
            };
            launchImageLibrary(options, async (response) => {
                const imagePath = response.assets[0].uri;
                setImagePath(imagePath);
                ('imagePath', imagePath);

                const uploadUri = imagePath;
                ('uploadUri', uploadUri);
                const fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
                setUploaded(true);
                const imgRes = await storage().ref(fileName).putFile(imagePath);
                ("image uploaded", imgRes);
                setUploaded(false);
                Alert.alert('Image Updated!');
                const url = await storage().ref(fileName).getDownloadURL();
                ('url', url);
                await AsyncStorage.setItem('image', url);
                ('URL stored in AsyncStorage');
            });
        } catch (error) {
            (error, error.message);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFECD0' }}>
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        marginTop: pixelSizeVertical(40),
                        fontFamily: 'Nunito-SemiBold',
                        fontSize: fontPixel(30),
                        textAlign: 'center',
                        color: '#372329',
                    }}>
                    Profile
                </Text>


                <Image source={{ uri: imagePath || url }} style={{ width: widthPixel(180), height: heightPixel(180), borderRadius: 180, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', alignContent: 'center', marginTop: pixelSizeVertical(30) }} />

                <Pressable onPress={handleImageUpload}>
                    <Image source={require('../../assets/images/editImage.png')} style={{ width: widthPixel(40), height: heightPixel(40), display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', marginRight: '32%', marginTop: pixelSizeVertical(-20) }} />

                </Pressable>



            </View>
            <View style={{ flex: 0.8, gap: 15 }}>
                <View>
                    <Text style={{ color: '#372329', fontSize: fontPixel(18), fontFamily: 'Nunito-Bold', marginHorizontal: pixelSizeHorizontal(20) }}>Name</Text>
                    <View style={styles.box}>
                        <Text style={{ alignSelf: 'center', color: '#372329', fontSize: fontPixel(20), fontFamily: 'Nunito-SemiBold', textAlign: 'center', textAlignVertical: 'center', marginTop: pixelSizeVertical(10) }} >{name}</Text>

                    </View>
                </View>
                <View>
                    <Text style={{ color: '#372329', fontSize: fontPixel(18), fontFamily: 'Nunito-Bold', marginHorizontal: pixelSizeHorizontal(28) }}>Email</Text>
                    <View style={styles.box}>
                        <Text style={{ alignSelf: 'center', color: '#372329', fontSize: fontPixel(20), fontFamily: 'Nunito-SemiBold', marginTop: pixelSizeVertical(10) }} >{email}</Text>

                    </View>
                </View>
            </View>
            <Pressable onPress={removeValue} style={{ width: widthPixel(120), height: heightPixel(43), backgroundColor: '#FF3974', borderRadius: 7, display: 'flex', justifyContent: 'center', alignSelf: 'flex-end', alignContent: 'center', alignItems: 'center', marginRight: pixelSizeHorizontal(28), marginBottom: pixelSizeVertical(28) }}>
                <Text style={{ color: '#FFECD0', fontSize: fontPixel(20), fontFamily: 'Nunito-Bold', }}>LogOut</Text>
            </Pressable>


            <View>


            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    box: {
        height: heightPixel(80), marginHorizontal: pixelSizeHorizontal(28), borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center',
        shadowColor: "#00000040",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 0.2,

        elevation: 10,
    }
});



