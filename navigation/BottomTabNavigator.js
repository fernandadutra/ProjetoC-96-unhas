import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Search from '../screens/Search';
import Newtutorial from '../screens/Newtutorial';
import Profile from '../screens/Profile';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Search"}
      labeled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          var iconname;
          if (route.name == 'Feed') {
            iconname = focused ? 'home' : 'home-outline';
          } else if (route.name == 'Search') {
            iconname = focused ? 'search' : 'search-outline';
          } else if (route.name == 'Newtutorial') {
            iconname = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name == 'Profile') {
            iconname = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <IonIcons name={iconname} size={25} color={color}></IonIcons>;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#CD5C5C',
        inactiveTintColor: '#C0C0C0',
      }}>
      <Tab.Screen name="Feed" component={Feed}></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
      <Tab.Screen name="Newtutorial" component={Newtutorial}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default BottomTab;
