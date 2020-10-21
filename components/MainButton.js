import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onMainPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.titleText,
    fontFamily: "exo2",
    fontSize: 18,
  },
});

export default MainButton;
