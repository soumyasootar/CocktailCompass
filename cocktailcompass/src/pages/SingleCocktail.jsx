import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../Redux/action";
import {
  Badge,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

const SingleCocktail = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktails, setModifiedCocktails] = useState(null);
  // console.log("modifiedCocktails: ", modifiedCocktails);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, []);

  useEffect(() => {
    if (cocktail && cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];

      const ingredients1 = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const ingredients = ingredients1.filter((e) => e != null);

      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktails(newCocktail);
    } else {
      setModifiedCocktails(null);
    }
  }, [id, cocktail]);

  if (!modifiedCocktails) {
    return (
      <Center>
        <Heading color={"white"}>No Cocktail Info Available</Heading>
      </Center>
    );
  } else {
    const { name, image, info, category, glass, instructions, ingredients } =
      modifiedCocktails;

    return (
      <>
        {loading ? (
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            ></Spinner>
          </Center>
        ) : (
          <>
            <Center width={"100%"}>
              <VStack>
                <Link to={"/"}>
                  <Button colorScheme="purple" size={"lg"}>
                    Go Back
                  </Button>
                </Link>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  // boxShadow={"2xl"}
                  // border={"8px solid #FAB133"}
                  // width={"100%"}
                  bgImage={
                    "url('https://t.pimg.jp/060/882/418/1/60882418.jpg')"
                  }
                  bg={"rgba( 255, 255, 255, 0.75 )"}
                  boxShadow={"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"}
                  backdropBlur={"blur( 20px )"}
                  borderRadius={"10px"}
                  border={"1px solid rgba( 255, 255, 255, 0.18 )"}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={image}
                    alt="Caffe Latte"
                    borderRadius={"2xl"}
                    margin={"2"}
                  />

                  <Stack>
                    <CardBody>
                      <Heading size="md">
                        <Badge colorScheme="orange">Name: </Badge> &nbsp;&nbsp;{" "}
                        {name}
                      </Heading>

                      <Text py="2">
                        <Badge colorScheme="green">Info: </Badge> &nbsp;&nbsp;{" "}
                        {info}
                      </Text>
                      <Text py="2">
                        <Badge colorScheme="purple">Category: </Badge>
                        &nbsp;&nbsp;
                        {category}
                      </Text>
                      <Text py="2">
                        <Badge colorScheme="cyan">Glass: </Badge>&nbsp;&nbsp;
                        {glass}
                      </Text>
                      <Text py="2" fontStyle={"italic"}>
                        <Badge colorScheme="yellow">Instruction: </Badge>
                        &nbsp;&nbsp;
                        {instructions}
                      </Text>
                      <HStack>
                        <Badge colorScheme="red">Ingredients: </Badge>
                        &nbsp;&nbsp;
                        {ingredients.map((e, i) => (
                          <Text key={i}>
                            {i == ingredients.length - 1
                              ? `and ${e}.`
                              : e
                              ? `${e},`
                              : ""}
                          </Text>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </VStack>
            </Center>
          </>
        )}
      </>
    );
  }
};

export default SingleCocktail;
