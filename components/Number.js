import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

function Number(props) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}> {props.children} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    padding: 5,
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 10,
  },
  textContainer: {
    margin: 10,
    paddingHorizontal: 0,
    alignItems: "center",
    textAlign: "center",
    padding: 0,
  },
});

export default Number;
