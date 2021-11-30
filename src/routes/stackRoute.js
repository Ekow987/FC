import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../home/Home';
import Detail from '../screens/Details';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default AppStack;