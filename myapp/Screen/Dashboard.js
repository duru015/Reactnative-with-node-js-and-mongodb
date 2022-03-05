import * as React from "react";
import { useState } from "react";
import { Button, Text, View,StyleSheet,SafeAreaView,StatusBar,Platform,Image, ScrollView } from "react-native";
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';
import Tree from "../assets/tree.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";



export default function DashboardScreen(props){
   

    // React.useEffect(()=>{
    //     Axios.get("http://192.168.1.147:8000/data/getAlldata")
    //     .then((response)=>{
    //         console.log('responseData',JSON.stringify(response));
    //     })
    //     .catch((e)=>{
    //         alert("error happened");
    //     })
    // },[]);
  
    const HomeScreen = ()=>{
    
        return(
            <View style={{backgroundColor:"#374480"}}>
            <SafeAreaView style={styles.home}>
            <StatusBar
            animated={true}
            backgroundColor="#61dafb"/>
            <View style={{display:"flex"}}>
            <Avatar
            size={100}
            titleStyle={{fontSize:25,color:"#374480"}}
            rounded
            title={props.route.params.username}
            containerStyle={{
              
              backgroundColor:"#008000",
              borderColor: '#293469',
              borderStyle: 'solid',
              borderWidth: 1,
              marginTop:30,
              marginLeft:20,
              marginBottom:10,
             
            }}
            
          />
          <Text style={styles.username}>{props.route.params.username}</Text>

          
          </View>
         
          </SafeAreaView>
          <Text  style={{backgroundColor:"#293469"}}></Text>
          <View>
          <Image source={Tree} style={{backgroundColor:"yellow",resizeMode:"cover",width:"100%",height:250}} />
          <Text  style={{backgroundColor:"#293469"}}></Text>
         <ScrollView style={{height:800}}>
          <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"space-between"}}>
      
            <Icon name="account-box" size={50} color="green" style={styles.Icon} />
            <Icon name="clipboard-list" size={50} color="green" style={styles.Icon} /> 
            <Icon name="phone" size={50} color="green" style={styles.Icon} /> 
           
          </View>
          <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"space-between"}}>
      
          <Icon name="alert-box" size={50} color="green" style={styles.Icon} />
          <Icon name="note-text" size={50} color="green" style={styles.Icon} /> 
          <Icon name="email" size={50} color="green" style={styles.Icon} /> 
         
        </View>
          </ScrollView>
          </View>
        </View>
        )
    }

const ProfileScreen = ()=>{
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
  
    const changeStatusBarVisibility = () => setHidden(!hidden);
  
    const changeStatusBarStyle = () => {
      const styleId = STYLES.indexOf(statusBarStyle) + 1;
      if (styleId === STYLES.length) {
        setStatusBarStyle(STYLES[0]);
      } else {
        setStatusBarStyle(STYLES[styleId]);
      }
    };
  
    const changeStatusBarTransition = () => {
      const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
      if (transition === TRANSITIONS.length) {
        setStatusBarTransition(TRANSITIONS[0]);
      } else {
        setStatusBarTransition(TRANSITIONS[transition]);
      }
    };

    return(
       
            <SafeAreaView style={styles.container}>
              <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden} />
              <Text style={styles.textStyle}>
                StatusBar Visibility:{'\n'}
                {hidden ? 'Hidden' : 'Visible'}
              </Text>
              <Text style={styles.textStyle}>
                StatusBar Style:{'\n'}
                {statusBarStyle}
              </Text>
              {Platform.OS === 'ios' ? (
                <Text style={styles.textStyle}>
                  StatusBar Transition:{'\n'}
                  {statusBarTransition}
                </Text>
              ) : null}
              <View style={styles.buttonsContainer}>
                <Button
                  title="Toggle StatusBar"
                  onPress={changeStatusBarVisibility} />
                <Button
                  title="Change StatusBar Style"
                  onPress={changeStatusBarStyle} />
                {Platform.OS === 'ios' ? (
                  <Button
                    title="Change StatusBar Transition"
                    onPress={changeStatusBarTransition} />
                ) : null}
              </View>
            </SafeAreaView>
          );
       
        
      

}
const Logout = ({navigation})=>{
    
    return(
       
        <SafeAreaView style={styles.containerData}>
        <StatusBar
        showHideTransition="0.5"
        backgroundColor="black"/>
        <Text style={{alignSelf:"center",padding:10,fontSize:20,color:"white"}}>Do you want to Logout?</Text>
   <TouchableOpacity onPress={()=>navigation.push("LoginScreen")} style={{backgroundColor:"green",padding:10,justifyContent:"center",textAlign:"center",alignContent:"center",alignSelf:"center"}}>
   <Text  >Logout</Text>
   </TouchableOpacity>
    </SafeAreaView>
    
    )
}
const Mail = () =>{
    return(
        <SafeAreaView style={styles.containerData}>
        <StatusBar
        showHideTransition="0.5"
        backgroundColor="black"/>
        
    <TouchableOpacity style={{backgroundColor:"green",padding:10,justifyContent:"center",textAlign:"center",alignContent:"center",alignSelf:"center"}}>
    <Text>Clickme</Text>
    </TouchableOpacity>
    </SafeAreaView>
    )
}
const Tab = createBottomTabNavigator();

    return(
        
        <Tab.Navigator  tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'lightgray',
            activeBackgroundColor: '#374480',
            inactiveBackgroundColor: '#374480',
                style: {
                      backgroundColor: '#293469',
                      paddingBottom: 8
                }
         }} >
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

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ECF0F1'
        },
        buttonsContainer: {
          padding: 10
        },
        textStyle: {
          textAlign: 'center',
          marginBottom: 8
        },
        home: {
            display:"flex",
            justifyContent: 'center',
         
          
        },
        username:{
            position:"absolute",
            top:70,
            left:130,fontSize:25

        }
        ,
        Icon:{
            borderWidth  :1,
            marginTop:30,
            marginLeft:10,
            padding:10,
            backgroundColor:"#293469"
        },
        containerData: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#293469',

          }
      });
      
  

