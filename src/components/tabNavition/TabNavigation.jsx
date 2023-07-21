import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/home/Home';
import Profile from '../../pages/profile/Profile';
import Book from '../../pages/book/Book';

import ChannelImage from '../../assets/svgImages/ChannelImage';

import HomeImage from '../../assets/svgImages/HomeImage';

import BookImage from '../../assets/svgImages/BookImage';

import ProfileImage from '../../assets/svgImages/ProfileImage';
import List from '../../pages/list/List';
import Channels from '../../pages/channels/Channels';
import ListImage from '../../assets/svgImages/ListImage';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [changeColor, setChangeColor] = useState('black');
  const colorHandler = () => {
    const newColor = changeColor === 'black' ? 'green' : 'black';
    setChangeColor(newColor);
  };
  return (
    <>
      <Tab.Navigator
        initialRouteName="List"
        styles={{}}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: '#FF3974',
            height: 80,
          },
        }}>
        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <ListImage color={focused ? '#FF3974' : 'black'} />
            ),
          }}
        />
        <Tab.Screen
          name="Channels"
          component={Channels}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <ChannelImage color={focused ? '#FF3974' : 'black'} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <HomeImage color={focused ? '#FF3974' : 'black'} />
            ),
          }}
        />
        <Tab.Screen
          name="Book"
          component={Book}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <BookImage color={focused ? '#FF3974' : 'black'} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size, focused }) => (
              <ProfileImage color={focused ? '#FF3974' : 'black'} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});

