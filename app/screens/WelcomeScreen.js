import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AppText, Screen } from "../components";

function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.logoBrand}>Notify</AppText>
      <Image style={styles.logo} source={require("../assets/hero.png")} />
      <View style={styles.tagContainer}>
        <AppText style={styles.tagLine}>Start taking notes</AppText>
        <AppText style={styles.tagLine}>whenever you want</AppText>
        <AppText style={styles.tagLineText}>
          Easy, fast and convenient notes
        </AppText>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  logo: {
    height: 200,
    width: 250,
  },
  logoBrand: {
    fontSize: 40,
    fontWeight: "bold",
  },
  tagContainer: {
    alignItems: "center",
  },
  tagLine: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tagLineText: {
    marginTop: 20,
  },
});
export default WelcomeScreen;
