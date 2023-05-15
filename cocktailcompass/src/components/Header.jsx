import { Button, HStack, Heading, Image, Input, Spacer } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <>
    <HStack w={"100vw"} border={"8px"} zIndex={"10"} bg={"whatsapp.200"} position={"sticky"} top={"2"} p={"5"} boxShadow={"2xl"} borderRadius={"full"} >
      <Heading  fontWeight={"extrabold"} color={"whatsapp.700"}>Find your favourite Cocktail </Heading>
      <Spacer/>
      <Image w={"24"}  borderRadius={"lg"} src="https://img.freepik.com/premium-vector/cocktail-compass-logo-design-vector-illustration_685330-1616.jpg?w=2000"></Image>
      <Spacer/>
      <Button colorScheme="facebook">🌜</Button>
    </HStack>
    </>
  );
};

export default Header;
