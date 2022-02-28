import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screen/LoginScreen';
import Dashboard from "./Screen/Dashboard";
import icon from "./assets/icon.png";

import SignUp from './Screen/SignUp';
import HomeScreenData from "./Screen/Homescreen";
export default function App() {
  const [isLoading,setLoading]= useState(true);

  useEffect(()=>{
    
    setTimeout(()=>{
       setLoading(false);
    },2000);
  },[]);

  if(isLoading){
    return(
      
    <View style={{flex:1,backgroundColor:"#34568B"}} >
    <HomeScreenData />
    
  
    </View>
   
     )}
     

  const stack = createStackNavigator();
  return (
   
// 

     <NavigationContainer>

     
     <stack.Navigator >
     <stack.Screen name="LoginScreen" component={LoginScreen}  />
     <stack.Screen name="signup" component={SignUp}   />
     <stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
     </stack.Navigator>
     </NavigationContainer>

   
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
