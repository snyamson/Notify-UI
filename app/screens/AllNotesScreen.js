import React from "react";
import { View, StyleSheet, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppText, Card, Screen } from "../components";
import defaultStyles from "../config/defaultStyles";
import router from "../navigation/router";

const notes = [
  {
    id: 1,
    title: "How to input lorem ",
    content:
      " content i need a four line content to test my app and i ned to write plenty to achieve my aim. with this , i need a placeholder text. example is lorem and it tis my fovrite. leme do thi hd hs jhdb kjdv jdb",
    createdAt: "20/04/1007",
  },
];

function AllNotesScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.heroText}>All notes</AppText>
        <AppText style={styles.noteCount}>1 Note</AppText>
      </View>
      <FlatList
        data={notes}
        keyExtractor={(note) => note.id.toString()}
        renderItem={({ item }) => (
          <Card
            note={item}
            onPress={() =>
              navigation.navigate(router.NOTE_DETAILS_SCREEN, item)
            }
            onLongPress={() => alert(item.title)}
          />
        )}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(router.ADD_NOTE_SCREEN)}
      >
        <MaterialCommunityIcons
          name="plus"
          size={30}
          color={defaultStyles.colors.white}
        />
      </Pressable>
    </Screen>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 50,
    bottom: 30,
    height: 55,
    justifyContent: "center",
    position: "absolute",
    right: 30,
    width: 55,
  },
  container: {
    backgroundColor: defaultStyles.colors.vLightGrey,
  },
  header: {
    alignItems: "center",
    paddingVertical: 50,
  },

  heroText: {
    color: defaultStyles.colors.DarkGrey,
    fontSize: 32,
    fontWeight: "500",
  },
});
export default AllNotesScreen;
