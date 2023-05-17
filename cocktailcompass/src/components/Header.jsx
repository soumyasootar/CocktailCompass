import { HStack, Image, Spacer, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <HStack
        w={"100vw"}
        h={"80px"}
        border={"4px"}
        zIndex={"10"}
        objectFit={"cover"}
        bgImage={
          'url("https://png.pngtree.com/background/20210710/original/pngtree-fresh-and-simple-fruit-drink-banner-picture-image_1002912.jpg")'
        }
        position={"sticky"}
        top={"0"}
        p={"10"}
        boxShadow={"2xl"}
        mb={"20"}
      >
        <Text
          fontSize={["md", "2xl", "2xl", "3xl"]}
          fontWeight={"semibold"}
          fontFamily={"cursive"}
          color={"#00563f"}
          textShadow={"0 0 3px #FFFFFF, 0 0 5px #FFFFFF"}
        >
          Find your favourite Cocktail{" "}
        </Text>
        <Spacer />
        <Image
          w={["80px", "100px", "100px", "100px"]}
          position={"absolute"}
          top={[2, 1, 1, 1]}
          right={5}
          borderRadius={"lg"}
          border={"4px dashed"}
          src="https://img.freepik.com/premium-vector/cocktail-compass-logo-design-vector-illustration_685330-1616.jpg?w=2000"
        ></Image>
        {/* <Button colorScheme="facebook" p={"5"}>🌜</Button> */}
      </HStack>
    </>
  );
};

export default Header;
