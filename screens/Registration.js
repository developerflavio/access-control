import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addUser } from "../src/actions/user";
import { Formik } from 'formik';


function Registration({ addUser }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accessLevel, setAccessLevel] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        importantForAutofill="no"
        placeholder="First Name"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        importantForAutofill="no"
        placeholder="Last Name"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        importantForAutofill="no"
        placeholder="Access Level"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => setAccessLevel(text)}
      />

      <TouchableOpacity
        onPress={() =>
          addUser({
            firstName: firstName,
            lastName: lastName,
            accessLevel: accessLevel,
            key: Math.random(),
          })
        }
      >
        <Text style={styles.nextScreen}>Take a Profile Picture</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#393e46",
    margin: 20,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  nextScreen: {
    width: 350,
    height: 55,
    backgroundColor: "#00adb5",
    margin: 20,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(null,mapDispatchToProps)(Registration);
