import React from "react";
import {View,Text,StyleSheet} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import BottomTab from "./BottomTabNavigator";

const Stack=createStackNavigator();

const StackNavigator=()=>{
    return(
        <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Registro" component={Register}></Stack.Screen>
            <Stack.Screen name="BottomTab" component={BottomTab}></Stack.Screen>
        </Stack.Navigator>
    )
}
export default StackNavigator;