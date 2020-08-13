import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import StyledButton from "../components/StyledButton";
import Header from "../components/Header";
function EndGameScreen(props) {
  return (
    <View style={styles.scr}>
      <Header title="Guess A Number" />
      <ScrollView>
        <View style={styles.screen}>
          <Text style={styles.text}>GAME 🎮 OVER</Text>
          <Image
            style={styles.img}
            source={require("../assets/img.jpg")}
            height={300}
          ></Image>
          <View style={styles.textCon}>
            <Text style={styles.text1}>
              The System Guessed {props.selectedNumber} in {props.count} Tries
            </Text>
          </View>
          <StyledButton onPress={props.main} style={styles.txt}>
            START NEW GAME
          </StyledButton>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scr: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  textCon: {
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    marginVertical: 30,
  },
  img: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2,
    borderRadius: Dimensions.get("window").width / 4,
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 5,
  },
  txt: {
    paddingHorizontal: 10,
  },
});

export default EndGameScreen;
