import React from "react";
import { View, StyleSheet, ImagePropTypes } from "react-native";
import color from "../constants/colors";

function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});

export default Card;
