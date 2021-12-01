import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/routes/stackRoute";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
