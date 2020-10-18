import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.textInput,
    borderBottomWidth: 1,
    width: 1,
    marginVertical: 10,
    fontFamily: 'exo2'
  },
});

export default Input;
