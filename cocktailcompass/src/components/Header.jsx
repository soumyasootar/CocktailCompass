import { Button, HStack, Heading, Image, Input, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <>
    <HStack w={"100vw"} h={"80px"} border={"4px"} zIndex={"10"} bgImage={'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhh4lf87YhFGele6KFiHgFAwZrHJg8KyyHNw&usqp=CAU")'} position={"sticky"} top={"0"} p={"10"}  boxShadow={"2xl"} mb={"20"} >
      <Text fontSize={["md","2xl","2xl","2xl"]} fontWeight={"semibold"} fontFamily={"cursive"} color={"white"}>Find your favourite Cocktail </Text>
      <Spacer/>
      <Image w={["80px","100px","100px","100px"]} position={"absolute"} top={[2,0,0,0]} right={5}  borderRadius={"lg"} border={"4px dashed"}   src="https://img.freepik.com/premium-vector/cocktail-compass-logo-design-vector-illustration_685330-1616.jpg?w=2000"></Image>
      {/* <Button colorScheme="facebook" p={"5"}>🌜</Button> */}
    </HStack>
    </>
  );
};

export default Header;
