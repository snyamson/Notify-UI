import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";

function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    padding: 12,
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 30,
  },
});
export default AppButton;
