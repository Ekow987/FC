import React from 'react';
import {View,Button,} from 'react-native';


function Button() {
    return (
       <View>
           <Text>You are wlecome</Text>
           <Button
           title ="Press Me"
           style={{color:"red"}}
           /> 
       </View>
    );
}

export default Button;