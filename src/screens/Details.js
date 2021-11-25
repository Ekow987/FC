import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';

function Details() {
    return (
       <View>
           <Text>Details of Ticket</Text>
           <Button navigation={navigation}>Print</Button>
           
       </View>
    );
}

export default Details;