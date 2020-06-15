import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumberInput from "../../components/NumberInput";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";
import { selectUser } from "../../actions/user";

const TypeIdScreen = ({ navigation, selectedUser, users }) => {
  const [userId, setUserId] = useState("");

  function handleSubmit() {
    // navigate to photoscreen
  }

  return (
    <View style={styles.container}>
      <View style={styles.numberDisplay}>
        <Text
        style={{fontSize:70, color:"white", alignSelf:"center"}}
        >{userId}</Text>
      </View>
      <View style={styles.numRowView}>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("1")) : null)}
        >
          <NumberInput number={1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("2")) : null)}
        >
          <NumberInput number={2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("3")) : null)}
        >
          <NumberInput number={3} />
        </TouchableOpacity>
      </View>
      <View style={styles.numRowView}>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("4")) : null)}
        >
          <NumberInput number={4} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("5")) : null)}
        >
          <NumberInput number={5} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("6")) : null)}
        >
          <NumberInput number={6} />
        </TouchableOpacity>
      </View>
      <View style={styles.numRowView}>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("7")) : null)}
        >
          <NumberInput number={7} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("8")) : null)}
        >
          <NumberInput number={8} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("9")) : null)}
        >
          <NumberInput number={9} />
        </TouchableOpacity>
      </View>
      <View style={styles.numRowView}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
          onPress={()=>setUserId("")}
          >
            <Ionicons name="ios-undo" size={50} color="#FFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => (userId.length < 4 ? setUserId(userId.concat("0")) : null)}
        >
          <NumberInput number={0} />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons name="md-contact" size={50} color="#00adb5" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  numberDisplay: {
    backgroundColor: "#393e46",
    height: 100,
    width: 330,
    borderRadius: 14,
    marginBottom: 30,
  },
  numRowView: {
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    width: 90,
    height: 90,
    backgroundColor: "#393e46",
    justifyContent: "center",
    borderRadius: 14,
    margin: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.userList,
    selectedUser: state.userReducer.selectedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectUser: (id) => dispatch(selectUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeIdScreen);
