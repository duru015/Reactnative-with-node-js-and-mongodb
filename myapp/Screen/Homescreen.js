import * as React from "react";
import { Image, View,Text } from "react-native";
import icon from "../assets/Home.png";


export default function HomeScreenData(){
    return(
     <View style={{flex:1,justifyContent:"center",alignSelf:"center",height:"100%",width:"100%"}}>
     <Image source={icon} width="100%" style={{height:"100%",width:"100%"}} />
   
     </View>
    )
}