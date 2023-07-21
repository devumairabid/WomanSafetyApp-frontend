import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import BookList from '../../components/bookList/BookList'
import { useNavigation } from '@react-navigation/native'

const List = (props) => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: '#FFECD0' }}>
            <View style={{ flex: 0.3 }}>

                <Text style={{ marginTop: 35, fontFamily: 'Nunito-SemiBold', fontSize: 35, textAlign: 'center', color: '#372329' }}>Bible of Safety</Text>
                <Image source={require('../../assets/images/safetyImage.png')} style={{ width: 100, height: 100, alignItems: 'center', alignSelf: 'center' }} />
            </View>
            <View style={{ flex: 0.7, gap: 15, marginBottom: 20 }}>
                <BookList text='Safety at Work' onPress={() => navigation.navigate('SafetyAtWork')} />
                <BookList text='Safety at Home' onPress={() => navigation.navigate('SafetyAtHome')} />
                <BookList text='Safety at University' onPress={() => navigation.navigate('SafetyAtUniversity')} />
                <BookList text='Women Safety Online' onPress={() => navigation.navigate('OnlineSafety')} />

                <BookList text=' Safety on the Streets' onPress={() => navigation.navigate('SafetyInStreet')} />


            </View>


        </View>
    )
}

export default List

const styles = StyleSheet.create({})