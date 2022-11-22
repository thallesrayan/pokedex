import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Welcome } from "../pages/welcome";
import { Time } from "../pages/time";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Time" component={Time} />
    </Stack.Navigator>
  );
}
