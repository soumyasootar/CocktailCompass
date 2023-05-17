import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchCocktail from "../Redux/action";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CockTailList = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => ({ ...state.data }));
  console.log("loading: ", loading);
  const [modifiedCocktails, setModifiedCocktails] = useState([]);

  useEffect(() => {
    console.log("yes");
    dispatch(fetchCocktail());
    console.log("yes");
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      let newCocktails = cocktails.map((item) => {
        const {
          idDrink,
          strDrink,
          strIngredient1,
          strIngredient2,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          name1: strIngredient2,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        ></Spinner>
      </Center>
    );
  }

  if (!cocktails) {
    <h2>No Cocktails Found</h2>;
  }
  return (
    <Box zIndex={"-10"} margin={"auto"} mb={"10"} width={"90%"}>
      <SimpleGrid columns={[1, 2,3, 4]} spacing="40px">
        {modifiedCocktails.map((ele) => {
          return (
            <Card maxW="sm" key={ele.id} boxShadow={"2xl"} bgImage={"url('https://thumbs.dreamstime.com/b/vector-fizzy-drink-isolated-white-background-undersea-bubbles-texture-126306777.jpg')"}>
              <CardBody>
                <Image src={ele.image} alt="cocktail.png" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">
                    {ele.glass}
                  </Heading>
                  <Text fontWeight={"bold"} color={"purple"} fontSize={"2xl"}>
                    {ele.name},{ele.name1}
                  </Text>
                  <Text size="md">{ele.info}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link to={`/cocktail/${ele.id}`}>
                  <Button variant="solid" colorScheme="purple">
                    Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CockTailList;
