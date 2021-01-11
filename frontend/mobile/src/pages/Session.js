import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function Session() {
  const [boxVisibleLogin, setBoxVisibleLogin] = useState("none");
  const [boxVisibleRegister, setBoxVisibleRegister] = useState("none");

  return (
    <View style={style.boxView}>
      <View style={style.boxLogin}>
        <Text style={style.textHeader}>Start Session</Text>
        <Text style={style.textLabel}>Login</Text>
        <TextInput />
        <Text style={style.textLabel}>Password</Text>
        <TextInput />
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            style.boxLogin.display = "none";
            style.boxRegister.display = "flex";
          }}
        >
          <Text style={style.textLink}>Not account? Register!</Text>
        </TouchableOpacity>
      </View>
      <View style={style.boxRegister}>
        <Text style={style.textHeader}>Register account</Text>
        <Text style={style.textLabel}>Login/Email</Text>
        <TextInput />
        <Text style={style.textLabel}>Password</Text>
        <TextInput />
        <Text style={style.textLabel}>Confirm Password</Text>
        <TextInput />
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            style.boxLogin.display = "flex";
            style.boxRegister.display = "none";
          }}
        >
          <Text style={style.textLink}>Have account? Make Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  boxView: {
    backgroundColor: "#fff",
    borderRadius: 1,
    borderColor: "black",
    padding: 15,
    margin: 17,
    elevation: 5,
    borderRadius: 10,
  },
  boxLogin: {
    display: "flex",
  },
  boxRegister: {
    display: "none",
  },
  textLabel: {
    fontSize: 15,
  },
  textHeader: {
    fontSize: 25,
  },
  textLink: {
    fontStyle: "italic",
    color: "#4e5",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#4e50f4",
    flexDirection: "row",
    padding: 9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Session;
