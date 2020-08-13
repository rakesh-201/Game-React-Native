import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import colors from "../constants/colors";

function StyledButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
      <View style={{ ...styles.text, ...props.style }}>
        <Text style={styles.txt}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    margin: 5,
    paddingVertical: 10,
    textAlign: "center",
  },
  text: {
    marginVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 30,
    textAlign: "center",
  },
});

export default StyledButton;
