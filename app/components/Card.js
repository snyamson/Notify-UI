import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";

function Card({ note, onPress, onLongPress, style }) {
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={onPress}
      onLongPress={onLongPress}
      android_ripple={{ color: "#fdfcfc" }}
    >
      <AppText numberOfLines={1} style={styles.title}>
        {note.title}
      </AppText>
      <AppText numberOfLines={3} style={styles.content}>
        {note.content}
      </AppText>
      <AppText style={styles.date}>{note.createdAt}</AppText>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    elevation: 0.5,
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 7,
    marginVertical: 10,
    marginHorizontal: "2.5%",
    padding: 10,
    width: "95%",
  },
  content: {
    color: defaultStyles.colors.mediumGrey,
    marginVertical: 5,
  },
  date: {
    fontSize: 10,
    fontWeight: "bold",
  },
  title: {
    color: defaultStyles.colors.DarkGrey,
    fontSize: 19.5,
    fontWeight: "bold",
  },
});
export default Card;
