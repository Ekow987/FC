import React from 'react';
import 'react-native-gesture-handler';
import {View} from 'react-native';
import Card from '../lib/Card';
import Card2 from '../lib/Card2';
import Card3 from '../lib/Card3';
import Card4 from '../lib/Card4';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

function Home({navigation}) {

  const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" children={({navigation})=><Home navigation={navigation}/>} />
    </Stack.Navigator>
  );
}
  return (
<View>
   <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  
    <Card navigation={navigation}/>
    <Card2/>
    <Card3/>
    <Card4/>
   
   </View>
  );
}

export default Home;




























// import React from "react";
// import Card from '../lib/Card';
// import Trees from "../store/data";
// import { View, FlatList } from "react-native";


// function Home({ navigation }) {

//   const showPeople = ({ item }) => {
//     return (
//       <Card
//         tree={item}   
//       />
//     );
//   };

//   return (
//     <View style={{ paddingHorizontal: 20 }}>
//       <FlatList
//         data={Trees}
//         renderItem={showPeople}
//         keyExtractor={(item) => String(item.id)}
//       />
//     </View>
//   );
// }

// export default Home;