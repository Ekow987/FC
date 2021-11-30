import React from 'react';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


function Details({navigation}) {
    

    const Stack = createStackNavigator();

    function MyStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      );
    }
        
      
    return (
       <View>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
           <Text>Details of Ticket</Text>
           <Button>Print</Button>
           
       </View>
    );
}

export default Details;