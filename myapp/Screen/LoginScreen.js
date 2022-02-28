import * as React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
 
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as Animatable from "react-native-animatable";
import { LinearGradient } from 'expo-linear-gradient';
import Axios from "axios";
export default function LoginScreen({ navigation }) {
    const LoginData = () => {
    console.log("username", state.username);
    console.log("password", state.password);

    Axios.post("http://192.168.1.147:8000/data/signin", {
      username: state.username,
      password: state.password,
    })

      .then((response) => {

        if (response.data.status === "success") {
          navigation.navigate("Dashboard");
        } else {
          alert("Username and Password donot match");
        }

        console.log("response", response);
      })
      .catch((e) => {
        alert("unsuccessful attempt");
      });
  };
 
  const [state, setState] = React.useState({
    username: "",
    password: "",
    isValidUser: true,
    isValidPassword: true,
    checkTextInputChange: true,
  });

  const textUsernameChange = (val) => {
    if (val.length >= 4) {
      console.log("error1");
      setState({
        ...state,
        username: val,
        checkTextInputChange: true,
      });
    } else {
      setState({
        ...state,
        username: val,
        checkTextInputChange: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    if (val.length >= 6) {
      setState({
        ...state,
        password: val,
        isValidPassword: true,
      });
    } else {
      setState({
        ...state,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleUser = (val) => {
    if (val.trim().length >= 4) {
      console.log("val", val);
      setState({
        ...state,
        isValidUser: true,
      });
    } else {
      setState({
        ...state,
        isValidUser: false,
      });
    }
  };
 

  return (
      <View>
      <SafeAreaView style={{flex:1,backgroundColor:"lightgrey"}}>
      <View style={styles.container}>
       <StatusBar style="auto" />
       
      </View>
      
      </SafeAreaView>
      <View style={styles.container}>
     
    <Animatable.View animation="rubberBand" duration={1000}>
      <View style={styles.data}>
        <Text style={styles.userdata}>Username</Text>
        <TextInput
          placeholder="Enter Username"
          style={styles.username}
          onChangeText={(e) => textUsernameChange(e)}
          onEndEditing={(e) => handleUser(e.nativeEvent.text)}
          
        />
        {state.isValidUser ? null : (
          <Animatable.View>
            <Text style={styles.error}>
              Username should be 4 character long
            </Text>
          </Animatable.View>
        )}

        <Text style={styles.userdata}>Password</Text>
        <TextInput
        secureTextEntry
          placeholder="Password"
          style={styles.username}
          onChangeText={(e) => handlePasswordChange(e)}
         
        />
       

        {state.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.error}>
              Password should be 6 character long
            </Text>
          </Animatable.View>
        )}
        <Text style={{color:"grey",fontSize:14,textAlign:"center",alignSelf:"center",paddingTop:10}}>Forgot Password ?</Text>

        <TouchableOpacity>
        <LinearGradient colors={['#59afb5','#077af5']} style={styles.LoginUser}>
        <Text style={styles.Button1} onPress={LoginData} >Login</Text>
        </LinearGradient>
        </TouchableOpacity>



      <TouchableOpacity>
      <LinearGradient colors={['#59afb5','#077af5']} style={styles.LoginUser} >
      <Text style={styles.Button1}>FaceRecognization</Text>
      </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.signup} onPress={()=>navigation.navigate('signup')}>Don't have account? Sign Up </Text>
</View>
    </Animatable.View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"#374480",
    },
    data:{
        marginTop:60,
        backgroundColor:"#293469",
        height:700,
        paddingTop:80,
        // justifyContent:"center",
        alignContent:'center',
        alignSelf:"center",
        width:"95%",
        borderRadius:20
    
    },
    username:{
    
        alignSelf:"center",
        padding:15,
        textAlign:"center",
        borderBottomColor:"rgba(100,50,40,0.2)",
        borderBottomWidth:1,
        width:"80%",
        backgroundColor:"#d8dbd7",
        justifyContent:"center",
        fontSize:20,
        borderRadius:10
    },
  Button: {
    padding: 10,
    marginTop: 20,
    backgroundColor: "lightgreen",
    textAlign: "center",
    alignSelf: "center",
  },
  error: {
    color: "red",
    fontSize: 15,
    paddingLeft:80
  },
  LoginUser:{
    justifyContent:"center",
    alignContent:'center',
    alignSelf:"center",
    marginTop:20,
    padding:15,
    width:"80%",
    borderRadius:10
},
Button1:{
    alignSelf:"center",
    fontSize:20,
    justifyContent:"space-between",   
},
userdata:{
    paddingTop:20,
    paddingBottom:10,
    alignSelf:"center",
    color:"#eff2e9",
    fontSize:20,
    justifyContent:"center"
},
signup:{
    paddingTop:50,
    color:"#696dd6",
   fontSize:17,
    alignSelf:"center",
    
}
});
