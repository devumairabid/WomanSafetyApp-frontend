import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const SafetyInStreet = () => {

    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: '#FFECD0', flex: 1 }} >
            <View style={{ flex: 0.1, display: 'flex', flexDirection: 'row', marginTop: 30, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', alignContent: 'center', gap: 12 }}>
                <TouchableOpacity onPress={() => navigation.navigate('TabNavigation')}>
                    <Image source={require('../../assets/images/leftArrow.png')} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 27, fontFamily: 'Nunito-SemiBold', color: '#372329', }}>Safety on the Street</Text>
                <Image source={require('../../assets/images/safetyImage.png')} style={{ width: 45, height: 45, }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: '8%', borderRadius: 10, marginBottom: 15 }}>
                <View style={{ width: '90%', alignSelf: 'center' }}>

                    <Image source={require('../../assets/images/womanCycle.png')} style={{ width: '100%', height: 180 }} />
                </View>
                <View style={{ marginHorizontal: '5%', gap: 15, marginTop: 8 }}>
                    <Text style={{ color: '#372329', fontSize: 14, fontFamily: 'Nunito-Bold' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Quis vel eros donec ac odio tempor orci dapibus. Purus sit amet luctus venenatis lectus magna fringilla. Vitae et leo duis ut diam quam nulla porttitor massa. Convallis posuere morbi leo urna molestie at elementum. Nulla aliquet enim tortor at auctor urna. Laoreet id donec ultrices tincidunt. Blandit massa enim nec dui nunc.
                    </Text>
                    <Text style={{ color: '#372329', fontSize: 14, fontFamily: 'Nunito-Bold' }}>
                        Et tortor consequat id porta nibh venenatis cras sed felis. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sed libero enim sed faucibus turpis. Eget nunc lobortis mattis aliquam.
                    </Text>
                </View>

            </View>


        </View>
    )
}

export default SafetyInStreet

const styles = StyleSheet.create({})