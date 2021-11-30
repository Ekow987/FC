import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Button
} from "native-base"
export const Example = ({navigation}) => {
  // const handlepress = ()=>{
  //  navigation.navigate('Detail');
  //   }
  return (
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: require("../assets/images/ticket1.jpg"),
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
           Ticket
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
      <Button style={{backgroundColor:"green"}} onPress={()=>{navigation.navigate('Detail')}}>Press Me</Button>
    </Box>
    
    
   
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}















// import React from "react";
// import { Button, Image, Text, View } from "react-native";
// import styles from './styles';
// import { images } from "../assets";


// export default function Card({ tree }) {
//   return (
//     // <View style={styles.card}>
    
//     //  <Image source={images[tree.img]} style={styles.cardImg} />
//     // <View style={styles.cardContent}>
//     //     <Text style={styles.title}> {tree.title}</Text>
//     //     <Text style={styles.para}>{tree.para}</Text>
//     //     <Button
//     //       title="Click me!"
//     //       color="red"
//     //       style={styles.btn}

//     //     />
//     //   </View>
//     // </View>

//   );
// }
