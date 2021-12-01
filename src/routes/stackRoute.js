import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home/Home";
import Login from "../lib/Login";
import Detail from "../screens/Details";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default AppStack;
