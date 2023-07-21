import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import LocationList from '../../components/locationList/LocationList'
import { useNavigation } from '@react-navigation/native'

const List = (props) => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: '#FFECD0' }}>
            <View style={{ flex: 0.3 }}>

                <Text style={{ marginTop: 35, fontFamily: 'Nunito-SemiBold', fontSize: 35, textAlign: 'center', color: '#372329' }}>Xplafés Around</Text>
                <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 35, textAlign: 'center', color: '#372329' }}>You</Text>
            </View>
            <View style={{ flex: 1, gap: 15, marginBottom: 20 }}>
                <LocationList text='Jennifer Lydia' myText='Wild West Street, New York' onPress={() => navigation.navigate('FirstList', {
                    myText: 'Wild West Street, New York'
                })} />
                <LocationList text='Maddie ' myText='Bell Bottom Street, Madison' onPress={() => navigation.navigate('SecondList', {
                    myText: 'Bell Bottom Street, Madison'
                })} />
                <LocationList text='Lawrence' myText='Caramon Street, Penselvenia' onPress={() => navigation.navigate('ThirdList', {
                    myText: 'Caramon Street, Penselvenia'
                })} />

                <LocationList text='Medona S' myText='Baker`s Street, London' onPress={() => navigation.navigate('ForthList', {
                    myText: 'Baker`s Street, London'
                })} />

                <LocationList text='Christina' myText='Schindler`s Street, New York' onPress={() => navigation.navigate('FifthList', {
                    myText: 'Schindler`s Street, New York'
                })} />
                <LocationList text='Emilia Chan' myText='Royalty Street, New York' onPress={() => navigation.navigate('SixthList', {
                    myText: 'Royalty Street, New York'
                })} />


            </View>


        </View>
    )
}

export default List

const styles = StyleSheet.create({})