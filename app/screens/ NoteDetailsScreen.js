import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText, Screen } from "../components";

import defaultStyles from "../config/defaultStyles";

function NoteDetailsScreen({ route }) {
  const note = route.params;
  return (
    <Screen style={styles.container}>
      <View style={styles.noteContainer}>
        <AppText style={styles.title}>{note.title}</AppText>
        <AppText style={styles.date}>{note.createdAt}</AppText>
        <AppText style={styles.content}>{note.content}</AppText>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  content: {},
  date: {
    color: defaultStyles.colors.mediumGrey,
    fontSize: 11,
    marginVertical: 10,
  },
  noteContainer: {
    marginTop: 20,
  },
  title: {
    color: defaultStyles.colors.DarkGrey,
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default NoteDetailsScreen;
