import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AllNotesScreen, AddNotesScreen, NoteDetailsScreen } from "../screens";

import { DeleteIcon, HeaderTitle } from "../components";
import router from "../navigation/router";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen
      name={router.ALL_NOTES_SCREEN}
      component={AllNotesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={router.ADD_NOTE_SCREEN} component={AddNotesScreen} />
    <Stack.Screen
      name={router.NOTE_DETAILS_SCREEN}
      component={NoteDetailsScreen}
      options={({ route }) => ({
        headerRight: () => <DeleteIcon />,
        headerTitle: () => <HeaderTitle title={route.params.title} />,
      })}
    />
  </Stack.Navigator>
);

export default AppNavigator;
