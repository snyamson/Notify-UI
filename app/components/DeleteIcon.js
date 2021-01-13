import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/defaultStyles";

function DeleteIcon({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="delete" size={25} color="#373737" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});
export default DeleteIcon;
