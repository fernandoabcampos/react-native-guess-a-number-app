import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOver}>The game is over!</Text>
      <Text style={styles.gameOver}>Number of rounds: {props.numberOfRounds}</Text>
      <Text style={styles.gameOver}>Number was: {props.numberFromUser}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  gameOver: {
    fontFamily: 'exo2'
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
