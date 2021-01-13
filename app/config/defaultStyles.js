import { Platform } from "react-native";
export default {
  colors: {
    primaryDark: "#1F1844",
    primary: "#4a3f70",
    DarkGrey: "#212121",
    mediumGrey: "#757575",
    lightGrey: "#f8f4f4",
    vLightGrey: "#fcfafa",
    white: "#fff",
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
