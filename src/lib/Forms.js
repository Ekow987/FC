import React from "react"
import { Input, Stack, Center, Heading, NativeBaseProvider, Button } from "native-base"
export const Example = () => {
    
  return (
    <Stack
      space={4}
      w={{
        base: "75%",
        md: "25%",
      }}
    >
      <Center>
        <Heading textAlign="center" mb="10">
          Create Records
        </Heading>
      </Center>
     
      <Input variant="filled" placeholder="Firstname" />
      <Input variant="filled" placeholder="Lastname" />
      <Input variant="filled" placeholder="Department" />
      <Input variant="filled" placeholder="Qualification" />
      <Button size="sm" variant="subtle" colorScheme="secondary">
    Submit
  </Button>
    </Stack>
    
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
