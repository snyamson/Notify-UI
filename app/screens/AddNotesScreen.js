import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppButton, Screen } from "../components";
import defaultStyles from "../config/defaultStyles";

function AddNotesScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange }) => (
          <>
            <View style={[styles.titleContainer, styles.input]}>
              <TextInput
                style={styles.text}
                placeholder="Title..."
                placeholderTextColor={defaultStyles.colors.mediumGrey}
                onChangeText={handleChange("title")}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                style={styles.text}
                placeholder="Content..."
                multiline
                numberOfLines={10}
                textAlignVertical="top"
                placeholderTextColor={defaultStyles.colors.mediumGrey}
                onChangeText={handleChange("content")}
              />
            </View>
            <AppButton
              style={styles.button}
              title="Save"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 50,
    width: "50%",
  },
  container: {
    paddingHorizontal: 15,
  },
  contentContainer: {},
  input: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 20,
    padding: 10,
  },
  titleContainer: {
    marginVertical: 30,
  },
  text: {
    fontSize: 19,
    paddingLeft: 15,
  },
});
export default AddNotesScreen;
