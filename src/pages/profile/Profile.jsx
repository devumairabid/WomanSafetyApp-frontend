import { StyleSheet, Text,  View,  Image,  Alert, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';


import {  launchImageLibrary } from 'react-native-image-picker';
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
            console.log(error);
        }
      
    }, );
    const getData = async () => {
        try {
            const name = await AsyncStorage.getItem('name');
            const email = await AsyncStorage.getItem('email');
            setName(name);
            setEmail(email);
            console.log('profile updated');
        } catch (e) {
            console.log(e, 'token ni h');
        }
    };
    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('name');
            await AsyncStorage.removeItem('email');
            navigation.navigate('login');
        } catch (e) { }
        console.log('Logout ...');
    };
    const getUrl = async () => {
        const url = await AsyncStorage.getItem('image');

        setUrl(url);
        console.log('getUrl', url);
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
                console.log('imagePath', imagePath);

                const uploadUri = imagePath;
                console.log('uploadUri', uploadUri);
                const fileName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
                setUploaded(true);
                const imgRes = await storage().ref(fileName).putFile(imagePath);
                console.log("image uploaded", imgRes);
                setUploaded(false);
                Alert.alert('Image Updated!');
                const url = await storage().ref(fileName).getDownloadURL();
                console.log('url', url);
                await AsyncStorage.setItem('image', url);
                console.log('URL stored in AsyncStorage');
            });
        } catch (error) {
            console.log(error, error.message);
        }
    };
    
    return (
        <View style={{ flex: 1, backgroundColor: '#FFECD0' }}>
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        marginTop: 40,
                        fontFamily: 'Nunito-SemiBold',
                        fontSize: 30,
                        textAlign: 'center',
                        color: '#372329',
                    }}>
                    Profile
                </Text>


                <Image source={{ uri:  imagePath || url }} style={{ width: 180, height: 180, borderRadius: 180, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', alignContent: 'center', marginTop: 30 }}   />

                <Pressable onPress={handleImageUpload}>
                    <Image source={require('../../assets/images/editImage.png')} style={{ width: 40, height: 40, display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', marginRight: '32%', marginTop: -20 }} />

                </Pressable>



            </View>
            <View style={{ flex: 0.8, gap: 15 }}>
                <View>
                    <Text style={{ color: '#372329', fontSize: 18, fontFamily: 'Nunito-Bold', marginHorizontal: 28 }}>Name</Text>
                    <View style={styles.box}>
                        <Text style={{ alignSelf: 'center', color: '#372329', fontSize: 20, fontFamily: 'Nunito-SemiBold', textAlign: 'center', textAlignVertical: 'center', marginTop: 10 }} >{name}</Text>

                    </View>
                </View>
                <View>
                    <Text style={{ color: '#372329', fontSize: 18, fontFamily: 'Nunito-Bold', marginHorizontal: 28 }}>Email</Text>
                    <View style={styles.box}>
                        <Text style={{ alignSelf: 'center', color: '#372329', fontSize: 20, fontFamily: 'Nunito-SemiBold', marginTop: 10 }} >{email}</Text>

                    </View>
                </View>
            </View>
            <Pressable onPress={removeValue} style={{ width: 120, height: 43, backgroundColor: '#FF3974', borderRadius: 7, display: 'flex', justifyContent: 'center', alignSelf: 'flex-end', alignContent: 'center', alignItems: 'center', marginRight: 28, marginBottom: 28 }}>
                <Text style={{ color: '#FFECD0', fontSize: 20, fontFamily: 'Nunito-Bold', }}>LogOut</Text>
            </Pressable>


            <View>


            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    box: {
        height: 80, marginHorizontal: 28, borderRadius: 15,
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





// const createUser = async () => {
//         try {
//             const response = await axios.post(
//                 'womansafetyapp-production.up.railway.app/auth/image',
//                 { image: url },
//             );

//             console.log('image posted successfully :', response.data.image);
//         } catch (error) {
//             console.error(error);
//         }
//     };


/* <Image source={{ uri: url }} style={{ width: '30%', height: 100 }} /> */ 


/* <Button title="Pick Image" onPress={() => imageUpload()} /> */ 
/* <Button title="Upload Image" onPress={() => submitImage()} /> */ 
/* <Button title="Upload in Db " onPress={() => createUser()} /> */ 








// const uploadImageToCloudinary = async (image) => {
//     try {
//       const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dumudqpgz/image/upload';
//       const uploadPreset = 'womanSafetyApp';

//       const data = new FormData();
//       data.append('file', image);
//       data.append('upload_preset', uploadPreset);

//       const response = await axios.post(cloudinaryUrl, data);

//       if (response.status !== 200) {
//         throw new Error('Image upload failed');
//       }

//       const result = response.data;
//       console.log('Upload result:', result);
//     } catch (error) {
//       console.error('Error uploading image:', error.message);
//     }
//   };
//   const getImage = async()=>{
//     try {
//         const imageSource = await AsyncStorage.getItem('image');

//         setImageSource(imageSource);

//         console.log("image get successfully");

//     } catch (e) {
//         console.log(e, 'image get failed');
//     }
//   }

// if (!name || !email) {
//     setName("");
//     setEmail("");
// }


    /* <form action="" onSubmit={()=>{}}>
                      <Input type='file'
                      lable='Image'name='myFile' id='file-upload' accept='.jpg,.jpeg,.png,.gif'
                      />
                  </form> */


    /* <Button type='submit' title='Save Image' onPress={uploadImageToCloudinary}/> */


// await AsyncStorage.setItem('image',imagePath );
// console.log("image uploaded successfully");

// setImageSource(imageSource)
// console.log('image path' , response.assets[0].uri);

// const saveImage =  await AsyncStorage.setItem('image', response.assets[0].uri);
// setImageSource(saveImage)
//   console.log(saveImage , 'image saved successfully');

// url = 'https://api.cloudinary.com/v1_1/dumudqpgz/image/upload'
// const uploadImageToCloudinary = async (image) => {
//     try {
//         const cloudinary = new Cloudinary({ cloud_name: 'dumudqpgz' });
//         const data = new FormData();
//         data.append('file', image);
//         data.append('upload_preset', 'YOUR_UPLOAD_PRESET');
//         data.append('cloud_name', 'dumudqpgz');
//         const response = await axios.post(
//             cloudinary.url('https://api.cloudinary.com/v1_1/dumudqpgz/image/upload'),
//             data
//         );
//         if (response.status !== 200) {
//             throw new Error('Image upload failed');
//         }
//         const result = response.data;
//         console.log('Upload result:', result);
//     } catch (error) {
//         console.error('Error uploading image:', error.response?.data || error.message);
//     }
// };
// const openImagePicker = async () => {
//     try {
//         const image = await DocumentPicker.pick({
//             type: [DocumentPicker.types.images],
//         });
//         uploadImageToCloudinary(image.uri);
//     } catch (error) {
//         console.log('Error selecting image:', error);
//     }
// };
// const imageUpload = () => {
//     ImagePicker.showImagePicker(
//         {
//             width: 300,
//             height: 400,
//             cropping: true,
//         },
//         (response) => {
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//             } else {
//                 const source = { uri: response.uri };
//                 setImageSource(source);
//             }
//         }
//     );
// }

// const imageUpload = () => {
//     ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true
//     }).then(image => {
//         console.log(image);
//         console.log(image.cropRect[0].path);

//     });
// }
// const onAvatarChange = (image) => {
//     console.log(image);
//     // upload image to server here
// };
// const saveImage =    await AsyncStorage.setItem('ImagePicker', ImagePicker.image);
// console.log(saveImage, "saveImage");
// ImagePicker.openCamera({
//     width: 300,
//     height: 400,
//     cropping: true,
// }).then(image => {
//     console.log(image);
// });
// ImagePicker.openCropper({
//     path: 'my-file-path.jpg',
//     width: 300,
//     height: 400
// }).then(image => {
//     console.log(image);
// });
// ImagePicker.clean().then(() => {
//     console.log('removed all tmp images from tmp directory');
// }).catch(e => {
//     alert(e);
// });
