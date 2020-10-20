import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The game is over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.jpg")}
          style={styles.image}
        />
      </View>

      <BodyText>Number of rounds: {props.numberOfRounds}</BodyText>
      <BodyText>Number was: {props.numberFromUser}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
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
