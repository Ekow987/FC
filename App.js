import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/routes/stackRoute";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
         <AppStack />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}





