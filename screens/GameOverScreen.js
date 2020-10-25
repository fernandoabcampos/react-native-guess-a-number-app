import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
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
      <MainButton onMainPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    color: Colors.primary,
  },
  image: { width: "100%", height: "100%" },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.7,
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
