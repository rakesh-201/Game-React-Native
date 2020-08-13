import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import color from "../constants/colors";
import Confirm from "../components/Confirm";
import Header from "../components/Header";

function StartGameScreen(props) {
  const { input, setInput } = props;

  const confirmHandler = () => {
    if (
      parseInt(input) < 1 &&
      parseInt(input) > 99 &&
      parseInt(input) == null
    ) {
      Alert.alert("Invalid Input", "Number should be between 1 and 99", [
        { text: "Okay", style: "destructive" },
      ]);
    } else {
      props.setSelectedNumber(parseInt(input));
    }
  };

  const inputHandler = () => {
    setInput("");
  };

  return (
    <>
      <Header title="Guess A Number" />
      <ScrollView>
        <KeyboardAvoidingView behavior="position" offset={10}>
          <View style={styles.cardContainer}>
            <Card style={styles.card}>
              <Text style={styles.text}> Enter A Number </Text>
              <TextInput
                style={styles.input}
                value={input}
                onChange={(e) => {
                  const a = e.nativeEvent.text;
                  setInput(a.replace(/[^0-9]/g, ""));
                }}
                blurOnSubmit={true}
                maxLength={2}
                keyboardType="numeric"
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    onPress={() => setInput("")}
                    title="CANCEL"
                    color={color.secondary}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    onPress={confirmHandler}
                    title="CONFIRM"
                    color={color.primary}
                  />
                </View>
              </View>
            </Card>
            <View style={styles.card2}>
              {props.selectedNumber ? (
                <Confirm
                  selectedNumber={props.selectedNumber}
                  setStart={props.setStart}
                />
              ) : null}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: "80%",
  },
  text: {
    color: color.primary,
    fontSize: 15,
    marginVertical: 5,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "80%",
  },
  button: {
    width: 80,
  },
  card2: {
    textAlign: "center",
    alignItems: "center",
  },
});

export default StartGameScreen;
