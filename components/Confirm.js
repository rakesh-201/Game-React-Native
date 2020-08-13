import React from "react";
import Card from "./Card";
import { Text, StyleSheet, View } from "react-native";
import Number from "./Number";
import StyledButton from "./StyledButton";

function Confirm(props) {
  return (
    <Card>
      <View style={styles.outer}>
        <Text style={styles.text}> Your Selected Number </Text>
        <Number>{props.selectedNumber}</Number>
        <StyledButton onPress={() => props.setStart(true)}>
          START GAME
        </StyledButton>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  outer: {
    textAlign: "center",
  },
});

export default Confirm;
