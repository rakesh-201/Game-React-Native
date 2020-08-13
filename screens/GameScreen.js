import React, { useState, useRef, useEffect } from "react";
import Card from "../components/Card";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import Number from "../components/Number";
import StyledButton from "../components/StyledButton";
import { Ionicons } from "@expo/vector-icons";

const randomNumber = (max, min, avoid) => {
  let rdnum = Math.random() * (max - min) + min;
  if (rdnum === avoid) {
    return randomNumber(max, min, avoid);
  }
  return Math.floor(rdnum);
};

const renderList = (guess, key_) => {
  return (
    <View style={styles.listItem} key={key_}>
      <Text>#{key_}</Text>
      <Text>{guess}</Text>
    </View>
  );
};

function GameScreen(props) {
  const { selectedNumber } = props;
  var minima = useRef(1);
  var maxima = useRef(99);
  const [guess, setGuess] = useState(randomNumber(1, 100, selectedNumber));
  const [count, setCount] = useState([guess]);

  useEffect(() => {
    if (guess === selectedNumber) {
      props.setResult(count.length);
      return;
    }
  }, [selectedNumber, guess]);

  const dir = (direction) => {
    if (
      (direction === "lower" && selectedNumber > guess) ||
      (direction === "higher" && selectedNumber < guess)
    ) {
      Alert.alert("Bad Input", "You Know You're Not Correct", [
        { text: "Sorry", style: "destructive" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxima.current = guess;
      var nextNumber = randomNumber(minima.current, maxima.current, guess);
      setGuess(nextNumber);
      setCount((prevCount) => [nextNumber, ...prevCount]);
    } else if (direction === "higher") {
      minima.current = guess + 1;
      const nextNumber = randomNumber(minima.current, maxima.current, guess);
      setGuess(nextNumber);
      setCount((prevCount) => [nextNumber, ...prevCount]);
    }
  };

  return (
    <View>
      <Header title="Guess A Number" />
      <View style={styles.number}>
        <Number>{guess}</Number>
      </View>
      <Card>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <StyledButton onPress={() => dir("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </StyledButton>
          </View>
          <View style={styles.button}>
            <StyledButton onPress={() => dir("higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </StyledButton>
          </View>
        </View>
      </Card>
      <View style={styles.con}>
        <ScrollView contentContainerStyle={styles.container}>
          {count.map((guess, index) => renderList(guess, count.length - index))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    margin: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  button: {
    width: "40%",
    textAlign: "center",
  },
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  listItem: {
    flexDirection: "row",
    fontSize: 20,
    backgroundColor: "rgba(255, 0, 140, 0.74)",
    width: Dimensions.get("window").width > 300 ? "60%" : "80%",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 2,
    elevation: 2,
    marginVertical: 4,
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: Dimensions.get("window").width > 300 ? 30 : 10,
  },
  con: {},
});

export default GameScreen;
