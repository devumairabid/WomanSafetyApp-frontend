import { StyleSheet, } from 'react-native'
import React, { useState, } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login/Login';
import SignUp from './src/pages/signUp/SignUp';
import List from './src/pages/list/List';
import Profile from './src/pages/profile/Profile';
import Book from './src/pages/book/Book';
import Home from './src/pages/home/Home';
import Channels from './src/pages/channels/Channels';
import BookImage from './src/assets/svgImages/BookImage';
import ListImage from './src/assets/svgImages/ListImage';
import ChannelImage from './src/assets/svgImages/ChannelImage';
import HomeImage from './src/assets/svgImages/HomeImage';
import ProfileImage from './src/assets/svgImages/ProfileImage';
import SafetyAtWork from './src/components/safetyAtWork/SafetyAtWork';
import SafetyAtHome from './src/components/safetyAtHome/SafetyAtHome';
import SafetyAtUniversity from './src/components/safetyAtUniversity/SafetyAtUniversity';
import OnlineSafety from './src/components/onlineSafety/OnlineSafety';
import SafetyInStreet from './src/components/safetyInStreet/SafetyInStreet';
import Toast from 'react-native-toast-message';
import ChatInWork from './src/components/chatInWork/ChatInWork';
import ChatInSchool from './src/components/chatInSchool/ChatInSchool';
import ChatInHomeMaker from './src/components/chatInHomeMaker/ChatInHomeMaker';
import FirstList from './src/components/detailOfList/firstList/FirsList';
import SecondList from './src/components/detailOfList/secondList/SecondList';
import ThirdList from './src/components/detailOfList/thirdList/ThirdList';
import ForthList from './src/components/detailOfList/forthList/ForthList';
import FifthList from './src/components/detailOfList/fifthList/FifthList';
import SixthList from './src/components/detailOfList/sixthList/SixthList';
const App = () => {
  const [isPressed, setIsPressed] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const TabNavigate = () => (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarActiveTintColor: '#FF3974',
      tabBarStyle: { backgroundColor: '#FF3974', height: 75, }
    }} >
      <Tab.Screen name="List" component={List} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size, focused }) => {
          return <ListImage
            color={isPressed ? 'red' : color}
            onPress={() => setIsPressed(!isPressed)} />
        },
      }} />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return <ChannelImage
              color={isPressed ? 'red' : color}
              onPress={() => setIsPressed(!isPressed)} />
          },
        }}
        name='channels' component={Channels} />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return <HomeImage
              color={isPressed ? 'red' : color}
              onPress={() => setIsPressed(!isPressed)} />
          },
        }}
        name='Home' component={Home} />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return <BookImage
              color={isPressed ? 'red' : color}
              onPress={() => setIsPressed(!isPressed)}

            />
          },
        }}
        name='Book' component={Book} />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return <ProfileImage
              color={isPressed ? 'red' : color}
              onPress={() => setIsPressed(!isPressed)} />
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  )
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator
          initialRouteName='signUp'
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigation" component={TabNavigate} />
          <Stack.Screen name="signUp" component={SignUp} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='SafetyAtWork' component={SafetyAtWork} />
          <Stack.Screen name='SafetyAtHome' component={SafetyAtHome} />
          <Stack.Screen name='SafetyAtUniversity' component={SafetyAtUniversity} />
          <Stack.Screen name='OnlineSafety' component={OnlineSafety} />
          <Stack.Screen name='SafetyInStreet' component={SafetyInStreet} />
          <Stack.Screen name='ChatInHomeMaker' component={ChatInHomeMaker} />
          <Stack.Screen name='ChatInWork' component={ChatInWork} />
          <Stack.Screen name='ChatInSchool' component={ChatInSchool} />
          <Stack.Screen name='FirstList' component={FirstList} />
          <Stack.Screen name='SecondList' component={SecondList} />
          <Stack.Screen name='ThirdList' component={ThirdList} />
          <Stack.Screen name='ForthList' component={ForthList} />
          <Stack.Screen name='FifthList' component={FifthList} />
          <Stack.Screen name='SixthList' component={SixthList} />


        </Stack.Navigator>
      </NavigationContainer>
      <Toast
        position='top'
        topOffset={50}
        visibilityTime={2000}
      />
    </>

  )
}

export default App

const styles = StyleSheet.create({})