import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../constants/colors";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {props.title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Header;
