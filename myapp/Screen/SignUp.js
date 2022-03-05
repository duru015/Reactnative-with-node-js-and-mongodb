import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Axios from "axios";
export default function SignUp() {
  const register = async ({ navigation }) => {
    console.log(
      "username:" +
        data1.username +
        " " +
        "password" +
        data1.password +
        " " +
        data1.confirmPassword
    );
    await Axios.post("http://192.168.1.32:8000/data/register", {
      username: data1.username,
      password: data1.password,
      confirmPassword: data1.confirmPassword,
    })
      .then((response) => {
        console.log("response", response);
      })
      .catch((e) => {
        alert("error happened");
      });
  };
  const [data1, setData] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    isValidUser: true,
    isValidPassword: true,
  });
  const setUsername = (val) => {
    if (val.length >= 4) {
      setData({
        ...data1,
        username: val,
        isValidUser: true,
      });
    } else {
      setData({
        ...data1,
        username: val,
        isValidUser: false,
      });
    }
  };
  const setPassword = (val) => {
    if (val.length >= 8) {
      setData({
        ...data1,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data1,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const setConfirmPassword = (val) => {
    if (val.length >= 20) {
      setData({
        ...data1,
        ConfirmPassword: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data1,
        confirmPassword: val,
        isValidPassword: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <Text style={styles.userdata}>Username:</Text>
        <TextInput
          placeholder="Enter Username"
          style={styles.username}
          onChangeText={(e) => setUsername(e)}
        />
        <Text style={styles.userdata}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.username}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry
        />
        <Text style={styles.userdata}>Confirm Password</Text>
        <TextInput
          placeholder="Confirm Password"
          style={styles.username}
          onChangeText={(e) => setConfirmPassword(e)}
          secureTextEntry
        />
        <TouchableOpacity>
          <LinearGradient
            colors={["#59afb5", "#077af5"]}
            style={styles.LoginUser}
          >
            <Text style={styles.Button1} onPress={register}>
              SignUp
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#374480",
  },
  View1: {
    marginTop: 40,
    backgroundColor: "#293469",
    height: 700,
    width: 500,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },

  Button: {
    padding: 10,
    marginTop: 20,
    backgroundColor: "lightgreen",
    textAlign: "center",
    alignSelf: "center",
  },
  username: {
    alignSelf: "center",
    padding: 18,
    textAlign: "center",
    borderBottomColor: "rgba(100,50,40,0.2)",
    borderBottomWidth: 1,
    width: "70%",
    backgroundColor: "#d8dbd7",
    justifyContent: "center",
    fontSize: 20,
    borderRadius: 10,
  },

  userdata: {
    paddingTop: 20,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#eff2e9",
    fontSize: 20,
    justifyContent: "center",
  },
  LoginUser: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    width: "70%",
  },
  Button1: {
    alignSelf: "center",
    fontSize: 20,
  },
});
