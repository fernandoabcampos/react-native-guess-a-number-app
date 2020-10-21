import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The game is over!</BodyText>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.jpg")} style={styles.image} />
      </View>

      <BodyText>
        Number of rounds:{" "}
        <Text style={styles.highlight}>{props.numberOfRounds}</Text>
      </BodyText>
      <BodyText>
        Number informed was:{" "}
        <Text style={styles.highlight}>{props.numberFromUser}</Text>
      </BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    color: Colors.primary,
  },
  image: { width: "100%", height: "100%" },
  imageContainer: {
    width: 300,
    height: 300,
    margin: 10,
    overflow: "hidden",
    borderRadius: 150,
    borderColor: Colors.primary,
    borderWidth: 3,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
