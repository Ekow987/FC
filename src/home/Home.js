import React from "react";
import "react-native-gesture-handler";
import { View, Text } from "react-native";
import Card from "../lib/Card";
import Card2 from "../lib/Card2";
import Card3 from "../lib/Card3";
import Card4 from "../lib/Card4";

function Home({ navigation }) {
  return (
    <View>
      {/*<Card navigation={navigation} />
      <Card2 />
      <Card3 />
      <Card4 /> */}

      <Text> Home Page </Text>
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
