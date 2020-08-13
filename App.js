import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import EndGameScreen from "./screens/EndGameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [input, setInput] = useState("");
  const [start, setStart] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [result, setResult] = useState(0);

  const mainScreen = () => {
    setResult(0);
    setStart(false);
    setInput("");
    setSelectedNumber();
  };

  var content = (
    <StartGameScreen
      selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber}
      input={input}
      setInput={setInput}
      setStart={setStart}
    />
  );
  if (result) {
    content = (
      <EndGameScreen
        selectedNumber={selectedNumber}
        count={result}
        main={mainScreen}
      />
    );
  } else if (start) {
    content = (
      <GameScreen selectedNumber={selectedNumber} setResult={setResult} />
    );
  }
  return (
    <View style={styles.container}>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
