import * as React from "react";
import { Button, Text, View } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function DashboardScreen(){


    const HomeScreen = ({navigation})=>{
    
        return(
            <>
        <Text>This is Home Screen Screen</Text>
        <Button  title="LogOut" />
        </>
        )
    }

const ProfileScreen = ()=>{
    return(
       
        <Text>This is profile Screen
        <Icon name="exit-to-app" size={15} color="#e91e63" />
        </Text>
    
  
    )

}
const Logout = ({navigation})=>{
    
    return(
        <>
    <Text>This is Logout Screen</Text>
    <Button onPress={()=>{navigation.navigate('LoginScreen')}} title="LogOut" />
    </>
    )
}
const Mail = () =>{
    return(
    <Text>This is mail profile</Text>
    )
}
const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator  >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,tabBarLabel:"Home",tabBarIcon:({color,size})=>(
            <Icon name="home" size={size} color={color} />
        ),}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false,tabBarLabel:"profile",tabBarIcon:({color,size})=>(
            <Icon name="face-profile" size={size} color={color} />
        )}} />
       
        <Tab.Screen name="Text" component={Mail} options={{headerShown:false,tabBarLabel:"Mail",tabBarIcon:({color,size})=>(
            <Icon name="email" size={size} color={color} />
        )}} />

        

        <Tab.Screen name="Logout" component={Logout} options={{headerShown:false,tabBarLabel:"Logout",tabBarIcon:({color,size})=>(
            <Icon name="exit-to-app" size={size} color={color}  />
        )}} />
        </Tab.Navigator>
       
    )
}