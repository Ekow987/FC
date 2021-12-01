import React from "react";
import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { Button } from "native-base";

function Details({ navigation }) {
  return (
    <View>
      <Text>Details of Ticket</Text>
      <Button>Print</Button>
    </View>
  );
}

export default Details;
