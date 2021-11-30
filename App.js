import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import {View} from "react-native";
import Login from "./src/lib/Login";



export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
   
  );
}

{/* */}



